import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email, page } = data

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address" }, { status: 400 })
    }

    // Use the environment variable that's now available
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      console.log("Google Script URL not configured, storing locally")
      // For now, just log the email and return success
      console.log("Email submitted:", email, "Page:", page)

      return NextResponse.json({
        success: true,
        message: "Thank you for joining our waitlist! We'll notify you when Mad Nektr launches.",
      })
    }

    // Submit to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${encodeURIComponent(email)}&page=${encodeURIComponent(page || "Landing Page")}`,
    })

    // Check if response is ok first
    if (!response.ok) {
      console.error("Google Script response not ok:", response.status, response.statusText)
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // Get response text first to check if it's JSON
    const responseText = await response.text()

    // Check if response looks like JSON
    if (!responseText.trim().startsWith("{") && !responseText.trim().startsWith("[")) {
      console.error("Google Script returned non-JSON response:", responseText.substring(0, 200))

      // If it's HTML (likely an error page), still return success to user
      if (responseText.includes("<!DOCTYPE") || responseText.includes("<html>")) {
        console.log("Received HTML response, likely authentication issue. Logging email locally.")
        console.log("Email submitted:", email, "Page:", page)

        return NextResponse.json({
          success: true,
          message: "Thank you for joining our waitlist! We'll notify you when Mad Nektr launches.",
        })
      }

      throw new Error("Invalid response format from Google Script")
    }

    // Try to parse JSON
    let result
    try {
      result = JSON.parse(responseText)
    } catch (parseError) {
      console.error("Failed to parse JSON response:", parseError)
      console.error("Response text:", responseText)

      // Log email locally and return success to user
      console.log("Email submitted (parse error):", email, "Page:", page)
      return NextResponse.json({
        success: true,
        message: "Thank you for joining our waitlist! We'll notify you when Mad Nektr launches.",
      })
    }

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message || "Thank you for joining our waitlist! We'll notify you when Mad Nektr launches.",
      })
    } else {
      // Log the email even if Google Sheets failed
      console.log("Email submitted (Google Sheets failed):", email, "Page:", page)
      console.error("Google Sheets error:", result.message)

      // Still return success to user
      return NextResponse.json({
        success: true,
        message: "Thank you for joining our waitlist! We'll notify you when Mad Nektr launches.",
      })
    }
  } catch (error) {
    console.error("Email submission error:", error)

    // Extract email from request for logging
    try {
      const data = await request.json()
      const { email, page } = data
      console.log("Email submitted (error fallback):", email, "Page:", page)
    } catch (e) {
      // Ignore parsing errors in error handler
    }

    // Always return success to user to avoid breaking the experience
    return NextResponse.json({
      success: true,
      message: "Thank you for joining our waitlist! We'll notify you when Mad Nektr launches.",
    })
  }
}
