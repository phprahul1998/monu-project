"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Inquery() {
  const { t, i18n } = useTranslation("en", { useSuspense: false });
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    user_email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName == "") {
      setError(
        `${t("validation_msg.error_msg")} ${t("person_details.firstname")}`
      );
    } else if (formData.lastName == "") {
      setError(
        `${t("validation_msg.error_msg")} ${t("person_details.lastname")}`
      );
    } else if (formData.user_email == "") {
      setError(`${t("validation_msg.error_msg")} ${t("person_details.email")}`);
    } else if (formData.telephone == "") {
      setError(
        `${t("validation_msg.error_msg")} ${t("person_details.telephone")}`
      );
    } else if (formData.telephone.length < 11) {
      setError(`${t("person_details.telephone_error")}`);
    } else if (formData.message == "") {
      setError(
        `${t("validation_msg.error_msg")} ${t("person_details.yourmessage")}`
      );
    } else {
      setError("");
      try {
        const response = await fetch("/api/savecontact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form data sent successfully");
        } else {
          console.error("Failed to send form data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <h2
            data-aos="fade-up"
            className="pt-4"
            dangerouslySetInnerHTML={{ __html: t("inquery.heading") }}
          />
          <p dangerouslySetInnerHTML={{ __html: t("inquery.para") }} />
        </div>

        <div
          data-aos="fade-up"
          className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 "
        >
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="firstName"
                  placeholder={t("person_details.firstname")}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mt-8">
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="lastName"
                  placeholder={t("person_details.lastname")}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8">
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  name="user_email"
                  placeholder={t("person_details.email")}
                  value={formData.user_email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8">
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  name="telephone"
                  placeholder={t("person_details.telephone")}
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8">
                <textarea
                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  name="message"
                  placeholder={t("person_details.yourmessage")}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              {error && (
                <div className="error_msg">
                  <p className="">{error}</p>
                </div>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide contactbtn text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  {t("person_details.sendmessage")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
