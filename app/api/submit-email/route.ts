import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email, page, firstName, lastName } = data

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address" }, { status: 400 })
    }

    // Validate first and last name
    if (!firstName || !lastName) {
      return NextResponse.json({ success: false, message: "Please provide both first and last name" }, { status: 400 })
    }

    // Insert into Supabase
    const { data: result, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email_address: email,
          first_name: firstName,
          last_name: lastName,
        }
      ])

    if (error) {
      console.error("Supabase error:", error)
      throw error
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for joining our waitlist! We'll notify you when Mad Nektr launches.",
    })
  } catch (error) {
    console.error("Email submission error:", error)

    // Extract email from request for logging
    try {
      const data = await request.json()
      const { email, firstName, lastName, page } = data
      console.log("Email submitted (error fallback):", email, firstName, lastName, "Page:", page)
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
