"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Inquery() {
  const { t, i18n } = useTranslation("en", { useSuspense: false });
  const [error, setError] = useState("");
  const [loader, setPreloader] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
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
    if (formData.firstname == "") {
      setError(
        `${t("validation_msg.error_msg")} ${t("person_details.firstname")}`
      );
    } else if (formData.lastname == "") {
      setError(
        `${t("validation_msg.error_msg")} ${t("person_details.lastname")}`
      );
    } else if (formData.email == "") {
      setError(`${t("validation_msg.error_msg")} ${t("person_details.email")}`);
    } else if (formData.phone == "") {
      setError(
        `${t("validation_msg.error_msg")} ${t("person_details.telephone")}`
      );
    } else if (formData.phone.length < 11) {
      setError(`${t("person_details.telephone_error")}`);
    } else if (formData.address == "") {
      setError(
        `${t("validation_msg.error_msg")} ${t("person_details.yourmessage")}`
      );
    } else {
      setError("");
      try {
        setPreloader(true);
        const response = await fetch("/api/savecontact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setPreloader(false);
          setError(`${t("validation_msg.thankYou")}`);
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: "",
          });
        } else {
          setPreloader(false);
          setError(`${t("validation_msg.Something_wrong")}`);
        }
      } catch (error) {
        setPreloader(false);
        setError(`${t("validation_msg.Something_wrong")}`);
      }
    }
  };

  return (
    <div className="container inquery" id="inquery">
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
                  name="firstname"
                  placeholder={t("person_details.firstname")}
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mt-8">
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="lastname"
                  placeholder={t("person_details.lastname")}
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8">
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder={t("person_details.email")}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8">
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  name="phone"
                  placeholder={t("person_details.telephone")}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8">
                <textarea
                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  name="address"
                  placeholder={t("person_details.yourmessage")}
                  value={formData.address}
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
                  {loader ? (
                    <div
                      className="spinner-border spinner-border-sm mr-2"
                      role="status"
                      aria-hidden="true"
                    ></div>
                  ) : null}
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
