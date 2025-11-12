'use server';

import { google } from "googleapis";

export async function getRunSheet() {
  const auth = await google.auth.getClient({
    projectId: process.env.SHEET_ID,
    credentials: {
      type: "service_account",
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet1!A1:E10", // Adjust the range as needed
  });

  return response.data.values || [];
}