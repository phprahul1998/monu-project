// pages/api/save-translations.js

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
    const newData = req.body; // Assuming newData is sent in the request body
    const fileData = fs.readFileSync(filePath, "utf8");
    const translations = JSON.parse(fileData);

    // Merge newData with existing data
    const updatedData = { ...translations, ...newData };

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), "utf8");

    res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error saving translations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
