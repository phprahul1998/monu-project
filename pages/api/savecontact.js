// pages/api/savecontact.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;
    console.log("Received form data:", formData);
    res
      .status(200)
      .json({ message: "Form data received and processed successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
