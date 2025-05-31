# Google Sheets Email Collection Setup

## Step 1: Create Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the code from `google-apps-script.js`
4. Save the project (name it "Mad Nektr Email Collection")

## Step 2: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new sheet named "Mad Nektr Waitlist"
3. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
4. Replace `YOUR_SHEET_ID_HERE` in the Apps Script with your actual Sheet ID

## Step 3: Deploy Apps Script

1. In Apps Script, click "Deploy" > "New deployment"
2. Choose type: "Web app"
3. Execute as: "Me"
4. Who has access: "Anyone"
5. Click "Deploy"
6. Copy the web app URL

## Step 4: Update Environment Variables

1. In your project, create a `.env.local` file
2. Add: `GOOGLE_SCRIPT_URL=your_web_app_url_here`
3. Or replace the URL directly in `app/api/submit-email/route.ts`

## Step 5: Test the Integration

1. Submit a test email on both the main page and product page
2. Check your Google Sheet to verify emails appear
3. Verify the "Page" column shows which form was used

## What You Get

- ✅ Real-time email collection to Google Sheets
- ✅ Tracks which page the signup came from
- ✅ Timestamps each signup
- ✅ Prevents duplicate submissions
- ✅ Success/error messages for users
- ✅ Loading states during submission
- ✅ Easy export to CSV for other tools

## Sheet Columns

- **Email**: The submitted email address
- **Date**: Date of submission
- **Page**: Which form was used (Main Waitlist, Pre-Order Page)
- **Timestamp**: Full date and time of submission
