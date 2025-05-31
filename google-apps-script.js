// GOOGLE APPS SCRIPT CODE
// Copy this to script.google.com and deploy as web app

function doPost(e) {
  try {
    // Replace 'YOUR_SHEET_ID_HERE' with your actual Google Sheet ID
    const SHEET_ID = "YOUR_SHEET_ID_HERE"
    const sheet = SpreadsheetApp.openById(SHEET_ID)
    const worksheet = sheet.getSheetByName("Mad Nektr Waitlist") || sheet.insertSheet("Mad Nektr Waitlist")

    // Add headers if first row is empty
    if (worksheet.getRange(1, 1).getValue() === "") {
      worksheet.getRange(1, 1, 1, 4).setValues([["Email", "Date", "Page", "Timestamp"]])

      // Format the header row
      const headerRange = worksheet.getRange(1, 1, 1, 4)
      headerRange.setFontWeight("bold")
      headerRange.setBackground("#f0f0f0")
    }

    const email = e.parameter.email
    const date = new Date().toLocaleDateString()
    const timestamp = new Date().toLocaleString()
    const page = e.parameter.page || "Landing Page"

    // Check for duplicate emails (optional)
    const emailColumn = worksheet.getRange(2, 1, worksheet.getLastRow() - 1, 1).getValues()
    const emailExists = emailColumn.some((row) => row[0] === email)

    if (emailExists) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          message: "This email is already on our waitlist!",
        }),
      ).setMimeType(ContentService.MimeType.JSON)
    }

    // Add the new email
    worksheet.appendRow([email, date, page, timestamp])

    // Auto-resize columns for better readability
    worksheet.autoResizeColumns(1, 4)

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Thank you for joining our waitlist! We'll notify you when Mad Nektr launches.",
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    Logger.log("Error: " + error.toString())
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Something went wrong. Please try again.",
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

// Optional: Function to get email count (for analytics)
function getEmailCount() {
  try {
    const SHEET_ID = "YOUR_SHEET_ID_HERE"
    const sheet = SpreadsheetApp.openById(SHEET_ID)
    const worksheet = sheet.getSheetByName("Mad Nektr Waitlist")

    if (!worksheet) {
      return 0
    }

    return worksheet.getLastRow() - 1 // Subtract 1 for header row
  } catch (error) {
    Logger.log("Error getting count: " + error.toString())
    return 0
  }
}
