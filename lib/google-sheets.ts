// Google Sheets integration utility
export async function submitToGoogleSheets(email: string, page = "Landing Page") {
  try {
    // Use environment variable instead of hardcoded URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      throw new Error("Google Script URL not configured")
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${encodeURIComponent(email)}&page=${encodeURIComponent(page)}`,
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error)
    return { success: false, message: "Network error occurred" }
  }
}
