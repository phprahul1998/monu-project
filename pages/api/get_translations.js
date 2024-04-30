// pages/api/get-translations.js

import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "translations",
    "fr",
    "translations.json"
  );

  try {
    const fileData = fs.readFileSync(filePath, "utf8");
    const translations = JSON.parse(fileData);
    res.status(200).json(translations);
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
