'use server';

import { google } from "googleapis";

export async function getSheetData() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  const auth = await google.auth.getClient({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      type: "service_account",
      private_key: privateKey,
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A1:L100",
    valueRenderOption: 'FORMATTED_VALUE',
    dateTimeRenderOption: 'FORMATTED_STRING'
  });

  return response.data.values || [];
}