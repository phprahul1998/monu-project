import axios from "axios";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;
    const payload = {
      fields: [
        {
          name: "firstname",
          value: formData.firstname,
        },
        {
          name: "lastname",
          value: formData.lastname,
        },
        {
          name: "email",
          value: formData.email,
        },
        {
          name: "address",
          value: formData.address,
        },
        {
          name: "phone",
          value: formData.phone,
        },
      ],
    };
    const response = await axios.post(
      "https://api.hsforms.com/submissions/v3/integration/submit/144440196/2ad4c998-57c5-4555-8d60-807faee12c7e",
      payload,
      {
        headers: {
          Authorization: `Bearer 8e81857c-f0be-481c-9df3-4d19bcea0cf2&userId=9252190`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      res.status(200).json({ success: true });
    } else {
      console.error("Error:", response.statusText);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
