"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Data({ translations }) {
  const [translationsData, setTranslationsData] = useState(translations);

  useEffect(() => {
    getJsonData();
  }, []);

  const handleSave = async () => {
    try {
      const newData = {
        demo123: "rahul!",
      };
      const response = await axios.post("api/save_translations", newData);
      setTranslationsData(response.data);
      console.log("File updated successfully");
    } catch (error) {
      console.error("Error saving translations:", error);
    }
  };

  const getJsonData = async () => {
    try {
      const response = await axios.post("api/get_translations");
      const translations = response.data;
      setTranslationsData(translations);
    } catch (error) {
      return {
        props: {
          error: error.message,
        },
      };
    }
  };

  return (
    <div>
      <h1>Translations</h1>
      <pre>{JSON.stringify(translationsData, null, 2)}</pre>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}
