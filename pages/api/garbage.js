import axios from "axios";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { formData, info } = req.body;
    const payload = {
      fields: [
        {
          name: "Apartment_building",
          value: formData.step1,
        },
        {
          name: "area_size",
          value: formData.step2,
        },
        {
          name: "roof_type",
          value: formData.step3,
        },
        {
          name: "direction_type",
          value: formData.step4,
        },
        {
          name: "electricityUse",
          value: formData.electricityUse,
        },
        {
          name: "address",
          value:
            "Address:-" +
            formData.localtion +
            " ,street Name" +
            formData.street +
            " ,street Name" +
            formData.streetno +
            " ,State:- " +
            formData.state +
            " ,Postal code:- " +
            formData.postal_code,
        },
        {
          name: "firstname",
          value: info.first_name,
        },
        {
          name: "lastname",
          value: info.last_name,
        },
        {
          name: "phone",
          value: info.telephone,
        },
        {
          name: "email",
          value: info.email,
        },
      ],
    };
    const response = await axios.post(
      "https://api.hsforms.com/submissions/v3/integration/submit/144440196/bd3ed6fd-770a-4baf-b086-36d7f8f71010",
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
