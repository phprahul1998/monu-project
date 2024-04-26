import { useState, useRef, useEffect } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Autocomplete from "react-google-autocomplete";
import Image from "next/image";
import axios from "axios";
const MultiStepForm = () => {
  const inputRef = useRef(null);
  const [country, setCountry] = useState("DE");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState([]);
  const [postal_code, setPostalcode] = useState("");
  const [localtion, setLocation] = useState("");
  const [loader, setPreloader] = useState(false);
  const [street, setStreet] = useState("");
  const [lastStep, setlastStep] = useState("");
  const [streetno, setstreetno] = useState("");
  const [state, setState] = useState("");
  const [salutation, setSalutation] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const { t } = useTranslation("en", { useSuspense: false });
  const [electricityUse, setSliderValue] = useState(50);
  const handleButtonClick = (value) => {
    setFormData({ ...formData, [`step${step}`]: value });
    setTimeout(() => {
      setStep(step + 1);
    }, 900);
  };

  const gotofirst = () => {
    setlastStep("");
    setStep(1);
    setFormData([]);
    setPostalcode("");
    setLocation("");
    setStreet("");
    setstreetno("");
    setSalutation("");
    setFirstName("");
    setLastName("");
    setTelephone("");
    setEmail("");
    setError("");
    setSelectedButtonIndex(null);
  };

  const handleBackButtonClick = () => {
    setStep(step - 1);
  };
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  const handleAddressChange = (e) => {
    setLocation(e.target.value);
    handleInputChange();
  };
  const handlePlaceSelected = (place) => {
    var newLocation = place.formatted_address;
    var latitude = place.geometry.location.lat();
    var longitude = place.geometry.location.lng();
    var latlng = new google.maps.LatLng(latitude, longitude);
    var geocoder = (geocoder = new google.maps.Geocoder());
    geocoder.geocode({ latLng: latlng }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          var streetNumber, state, streetName;
          results[0].address_components.forEach((component) => {
            if (component.types.includes("street_number")) {
              streetNumber = component.long_name;
            }
            if (component.types.includes("route")) {
              streetName = component.long_name;
            }
            if (component.types.includes("administrative_area_level_1")) {
              state = component.long_name;
            }
          });
          var pin =
            results[0].address_components[
              results[0].address_components.length - 1
            ].long_name;

          setLocation(inputRef.current.value);
          setPostalcode(pin ? pin : "");
          setStreet(streetName ? streetName : "");
          setstreetno(streetNumber ? streetNumber : "");
          // setState(state ? state : "");
        }
      }
    });
    setLocation(newLocation);
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    if (step === 6 && !localtion) {
      setError(
        ` ${t("validation_msg.error_msg")} ${t(
          "stepform.formdata.step9.location"
        )}`
      );
    } else if (step === 6 && !postal_code) {
      setError(
        `${t("validation_msg.error_msg")}  ${t(
          "stepform.formdata.step9.postal_code"
        )}`
      );
    } else if (step === 6 && !streetno) {
      setError(
        ` ${t("validation_msg.error_msg")} ${t("stepform.formdata.step9.no")}`
      );
    } else if (step === 6 && !street) {
      setError(
        ` ${t("validation_msg.error_msg")} ${t(
          "stepform.formdata.step9.street"
        )}`
      );
    } else if (step === 6 && !state) {
      setError(
        ` ${t("validation_msg.error_msg")} ${t(
          "stepform.formdata.step9.state"
        )}`
      );
    } else {
      setError("");
      setFormData({
        ...formData,
        electricityUse,
        localtion,
        street,
        state,
        postal_code,
        streetno,
      });
      setStep(step + 1);
    }
  };

  const handleInputChange = () => {
    setError("");
  };

  const handleSendRequest = (e) => {
    e.preventDefault();
    if (step === 7 && !salutation) {
      setError(
        `${t("validation_msg.error_msg")} ${t(
          "stepform.formdata.step10.Salutation"
        )}`
      );
    } else if (step === 7 && !first_name) {
      setError(
        `${t("validation_msg.error_msg")} ${t(
          "stepform.formdata.step10.firstname"
        )}`
      );
    } else if (step === 7 && !last_name) {
      setError(
        `${t("validation_msg.error_msg")} ${t(
          "stepform.formdata.step10.lastname"
        )}`
      );
    } else if (step === 7 && !telephone) {
      setError(
        `${t("validation_msg.error_msg")} ${t(
          "stepform.formdata.step10.telephone"
        )}`
      );
    } else if (telephone.length < 11) {
      setError(`${t("person_details.telephone_error")}`);
    } else if (step === 7 && !email) {
      setError(
        `${t("validation_msg.error_msg")} ${t(
          "stepform.formdata.step10.email"
        )}`
      );
    } else {
      setPreloader(true);
      const info = {
        salutation: salutation,
        first_name: first_name,
        last_name: last_name,
        telephone: telephone,
        email: email,
      };
      try {
        const response = axios
          .post("api/garbage", {
            formData,
            info,
          })
          .then((response) => {
            setPreloader(false);
            if (response.data.success == true) {
              setlastStep(`${t("stepform.laststep")}`);
              setStep(step + 1);
            } else {
              setlastStep(`${t("stepform.laststep_error")}`);
              setStep(step + 1);
            }
          });
      } catch (error) {
        setlastStep(`${t("stepform.laststep_error")}`);
        setStep(step + 1);
      }
    }
  };
  return (
    <div className="multistep-form">
      <h2
        className="p-2"
        dangerouslySetInnerHTML={{ __html: t("stepform.main_heading1") }}
      />

      {/*<h2 >{t('stepform.main_heading1')}</h2>*/}
      <div className="dotted-line">
        {Array.from({ length: 8 }, (_, index) => (
          <span
            key={index}
            className={`${index < step ? "completed" : ""} ${
              index === step - 1 ? "selected" : ""
            }`}
          ></span>
        ))}
      </div>
      {step === 1 && (
        <form>
          <h2>
            {step}. {t("stepform.formdata.step1.heading")}{" "}
          </h2>{" "}
          <button
            className="commonbtn"
            type="button"
            onClick={() => handleButtonClick("detached_house")}
            style={
              formData[`step${step}`] === "detached_house"
                ? {
                    backgroundColor: "#41A634",
                    border: "3px solid #fff",
                    color: "#fff",
                  }
                : {}
            }
          >
            <img
              className=""
              src="/img/1_Einfamilienhaus.png"
              alt=""
              width={60}
              height={60}
            />
            <p> {t("stepform.formdata.step1.option1")}</p>
          </button>
          <button
            className="commonbtn"
            type="button"
            onClick={() => handleButtonClick("Apartment_building")}
            style={
              formData[`step${step}`] === "Apartment_building"
                ? {
                    backgroundColor: "#41A634",
                    border: "3px solid #fff",
                    color: "#fff",
                  }
                : {}
            }
          >
            {" "}
            <img
              className=""
              src="/img/1_Mehrfamilienhaus.png"
              alt=""
              width={60}
              height={60}
            />
            <p> {t("stepform.formdata.step1.option2")}</p>
          </button>
          <button
            className="commonbtn"
            type="button"
            onClick={() => handleButtonClick("Commercial_buildings")}
            style={
              formData[`step${step}`] === "Commercial_buildings"
                ? {
                    backgroundColor: "#41A634",
                    border: "3px solid #fff",
                    color: "#fff",
                  }
                : {}
            }
          >
            {" "}
            <img
              className=""
              src="/img/1_Gewerbegebaude.png"
              alt=""
              width={60}
              height={60}
            />
            <p> {t("stepform.formdata.step1.option3")} </p>
          </button>
          <button
            className="commonbtn"
            type="button"
            onClick={() => handleButtonClick("Miscellaneous")}
            style={
              formData[`step${step}`] === "Miscellaneous"
                ? {
                    backgroundColor: "#41A634",
                    border: "3px solid #fff",
                    color: "#fff",
                  }
                : {}
            }
          >
            {" "}
            <img
              className=""
              src="/img/1_Sonstiges.png"
              alt=""
              width={60}
              height={60}
            />
            <p> {t("stepform.formdata.step1.option4")}</p>
          </button>
        </form>
      )}

      {step === 2 && (
        <form>
          <div>
            <h2>
              {step}. {t("stepform.formdata.step2.heading")}{" "}
            </h2>{" "}
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("25_m2")}
              style={
                formData[`step${step}`] === "25_m2"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/2_bis_25m2.png"
                alt=""
                width={60}
                height={60}
              />
              <p> {t("stepform.formdata.step2.option1")}</p>
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("25_40_m2")}
              style={
                formData[`step${step}`] === "25_40_m2"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/2_25-40m2.png"
                alt=""
                width={60}
                height={60}
              />
              <p> {t("stepform.formdata.step2.option2")}</p>
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("40_100_m2")}
              style={
                formData[`step${step}`] === "40_100_m2"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/2_40-100m2.png"
                alt=""
                width={60}
                height={60}
              />
              <p>{t("stepform.formdata.step2.option3")}</p>
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("over_100_m2")}
              style={
                formData[`step${step}`] === "over_100_m2"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/1_Sonstiges.png"
                alt=""
                width={60}
                height={60}
              />
              <p>{t("stepform.formdata.step2.option4")}</p>
            </button>
          </div>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}>
              {t("button.btnBack")}
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form>
          <div>
            <h2>
              {step}. {t("stepform.formdata.step3.heading")}{" "}
            </h2>{" "}
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("Flat_roof")}
              style={
                formData[`step${step}`] === "Flat_roof"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/3_Flachdach.png"
                alt=""
                width={60}
                height={60}
              />
              <p>{t("stepform.formdata.step3.option1")}</p>
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("Gable_roof")}
              style={
                formData[`step${step}`] === "Gable_roof"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/3_Satteldach.png"
                alt=""
                width={60}
                height={60}
              />
              <p> {t("stepform.formdata.step3.option2")}</p>
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("Hip_roof")}
              style={
                formData[`step${step}`] === "Hip_roof"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/3_Walmdach.png"
                alt=""
                width={60}
                height={60}
              />

              <p> {t("stepform.formdata.step3.option3")}</p>
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("Other")}
              style={
                formData[`step${step}`] === "Other"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/1_Sonstiges.png"
                alt=""
                width={60}
                height={60}
              />
              <p> {t("stepform.formdata.step3.option4")}</p>
            </button>
          </div>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}>
              {t("button.btnBack")}
            </button>
          </div>
        </form>
      )}

      {step === 4 && (
        <form>
          <div>
            <h2>
              {step}. {t("stepform.formdata.step4.heading")}{" "}
            </h2>{" "}
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("South")}
              style={
                formData[`step${step}`] === "South"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/4_Suden.png"
                alt=""
                width={60}
                height={60}
              />
              <p> {t("stepform.formdata.step4.option1")}</p>
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("East")}
              style={
                formData[`step${step}`] === "East"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/4_Osten.png"
                alt=""
                width={60}
                height={60}
              />
              <p> {t("stepform.formdata.step4.option2")}</p>
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("West")}
              style={
                formData[`step${step}`] === "West"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/4_Westen.png"
                alt=""
                width={60}
                height={60}
              />
              <p> {t("stepform.formdata.step4.option3")}</p>
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("Southwest_southeast")}
              style={
                formData[`step${step}`] === "Southwest_southeast"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/4_Sudwest-Sudost.png"
                alt=""
                width={60}
                height={60}
              />
              <p> {t("stepform.formdata.step4.option4")}</p>
            </button>
          </div>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}>
              {t("button.btnBack")}
            </button>
          </div>
        </form>
      )}

      {step === 5 && (
        <form>
          <div className="text-center">
            <h2>
              {step}. {t("stepform.formdata.step5.heading")}{" "}
            </h2>{" "}
            <div className="range-slider-container">
              <p>{electricityUse} kWh </p>
              <input
                type="range"
                min="0"
                step="100"
                max="10000"
                value={electricityUse}
                onChange={handleSliderChange}
                className="slider"
              />
            </div>
            {error && (
              <div className="error_msg">
                <p className="">{error}</p>
              </div>
            )}
            <div>
              <button className="nextbtn" onClick={handleNextButtonClick}>
                {t("button.btnNext")}
              </button>
              <button
                className="backbtn"
                type="button"
                onClick={handleBackButtonClick}
              >
                {t("button.btnBack")}
              </button>
            </div>
          </div>
        </form>
      )}
      {step === 6 && (
        <form>
          <div className="setp7">
            <h2>
              {step}. {t("stepform.formdata.step7.heading")}
            </h2>{" "}
            <span>
              <AiOutlineExclamationCircle />
            </span>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("PV + Speicher")}
              style={
                formData[`step${step}`] === "PV + Speicher"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/7_PV-Speicher.png"
                alt=""
                width={60}
                height={60}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("stepform.formdata.step7.option1"),
                }}
              />{" "}
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() =>
                handleButtonClick("PV + Speicher + Energiemanagement")
              }
              style={
                formData[`step${step}`] === "PV + Speicher + Energiemanagement"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/7_PV-Speicher-EMS.png"
                alt=""
                width={60}
                height={60}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("stepform.formdata.step7.option2"),
                }}
              />
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("PV-Erweiterung")}
              style={
                formData[`step${step}`] === " PV-Erweiterung"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/7_PV-Erweiterung.png"
                alt=""
                width={60}
                height={60}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("stepform.formdata.step7.option3"),
                }}
              />{" "}
            </button>
            <button
              className="commonbtn"
              type="button"
              onClick={() => handleButtonClick("PV-Selbstaufbau")}
              style={
                formData[`step${step}`] === "PV-Selbstaufbau"
                  ? {
                      backgroundColor: "#41A634",
                      border: "3px solid #fff",
                      color: "#fff",
                    }
                  : {}
              }
            >
              <img
                className=""
                src="/img/7_PV-Selbstaufbau.png"
                alt=""
                width={60}
                height={60}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("stepform.formdata.step7.option4"),
                }}
              />{" "}
            </button>
          </div>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}>
              {t("button.btnBack")}
            </button>
          </div>{" "}
        </form>
      )}

      {step === 7 && (
        <form>
          <h2>
            {step}. {t("stepform.formdata.step9.heading")}
          </h2>{" "}
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12 col-xs-12">
              <Autocomplete
                className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                placeholder={t("stepform.formdata.step9.location")}
                onChange={handleAddressChange}
                ref={inputRef}
                apiKey={process.env.GOOGLE_MAP_API_KEY}
                onPlaceSelected={(place) => handlePlaceSelected(place)}
                value={localtion}
                options={{
                  types: ["address"],
                  componentRestrictions: { country },
                }}
              />
            </div>

            <div className="col-md-3 col-sm-12 col-xl-3 col-lg-3 col-xs-12">
              <input
                className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                value={postal_code}
                placeholder={t("stepform.formdata.step9.postal_code")}
                onChange={(e) => {
                  setPostalcode(e.target.value), handleInputChange();
                }}
              />
            </div>

            <div className="col-md-7 col-sm-12 col-xl-7 col-lg-7 col-xs-12">
              <input
                className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                value={street}
                placeholder={t("stepform.formdata.step9.street")}
                onChange={(e) => {
                  setStreet(e.target.value), handleInputChange();
                }}
              />
            </div>
            <div className="col-md-2 col-sm-12 col-xl-2 col-lg-2 col-xs-12">
              <input
                className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                value={streetno}
                placeholder={t("stepform.formdata.step9.no")}
                onChange={(e) => {
                  setstreetno(e.target.value), handleInputChange();
                }}
              />
            </div>

            <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12 col-xs-12">
              <select
                className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                value={state}
                onChange={(e) => {
                  setState(e.target.value), handleInputChange();
                }}
              >
                <option value="">Select State</option>
                <option value="Baden-Württemberg">Baden-Württemberg</option>
                <option value="Bavaria">Bavaria</option>
                <option value="Berlin">Berlin</option>
                <option value="Brandenburg">Brandenburg</option>
                <option value="Bremen">Bremen</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Hesse">Hesse</option>
                <option value="Mecklenburg-Western Pomerania">
                  Mecklenburg-Western Pomerania
                </option>
                <option value="Lower Saxony">Lower Saxony</option>
                <option value="North Rhine-Westphalia">
                  North Rhine-Westphalia
                </option>
                <option value="Rhineland-Palatinate">
                  Rhineland-Palatinate
                </option>
                <option value="Saarland">Saarland</option>
                <option value="Saxony">Saxony</option>
                <option value="Saxony-Anhalt">Saxony-Anhalt</option>
                <option value="Schleswig-Holstein">Schleswig-Holstein</option>
                <option value="Thuringia">Thuringia</option>
              </select>
            </div>

            {/* <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12 col-xs-12">
              <select
                className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                value={state}
                onChange={(e) => {
                  setState(e.target.value), handleInputChange();
                }}
              >
                <option value="">Select State</option>
                <option value="Baden-Württemberg">Baden-Württemberg</option>
                <option value="Bavaria">Bavaria</option>
                <option value="Berlin">Berlin</option>
                <option value="Brandenburg">Brandenburg</option>
                <option value="Bremen">Bremen</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Hesse">Hesse</option>
                <option value="Mecklenburg-Western Pomerania">
                  Mecklenburg-Western Pomerania
                </option>
                <option value="Lower Saxony">Lower Saxony</option>
                <option value="North Rhine-Westphalia">
                  North Rhine-Westphalia
                </option>
                <option value="Rhineland-Palatinate">
                  Rhineland-Palatinate
                </option>
                <option value="Saarland">Saarland</option>
                <option value="Saxony">Saxony</option>
                <option value="Saxony-Anhalt">Saxony-Anhalt</option>
                <option value="Schleswig-Holstein">Schleswig-Holstein</option>
                <option value="Thuringia">Thuringia</option>
              </select>
            </div> */}
            {error && (
              <div className="error_msg mt-3">
                <p className="">{error}</p>
              </div>
            )}
            <div>
              <button className="nextbtn" onClick={handleNextButtonClick}>
                {t("button.btnNext")}
              </button>
              <button
                className="backbtn"
                type="button"
                onClick={handleBackButtonClick}
              >
                {t("button.btnBack")}
              </button>
            </div>
          </div>
        </form>
      )}

      {step === 8 && (
        <form>
          <h2>
            {step}. {t("stepform.formdata.step10.heading")}
          </h2>{" "}
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xl-8 col-lg-8 col-xs-12">
              <div className="float-left step10form">
                <input
                  className="salutation"
                  type="radio"
                  id="mr"
                  name="salutation"
                  value="Mr."
                  checked={salutation === "Mr."}
                  onChange={() => setSalutation("Mr.")}
                />
                <label htmlFor="mr">
                  &nbsp;&nbsp;{t("stepform.formdata.step10.mr")}
                </label>{" "}
                &nbsp; &nbsp;
                <input
                  className="salutation"
                  type="radio"
                  id="mrs"
                  name="salutation"
                  value="mrs"
                  checked={salutation === "mrs"}
                  onChange={() => {
                    setSalutation("mrs"), handleInputChange();
                  }}
                />
                <label htmlFor="Mrs.">
                  &nbsp; &nbsp;{t("stepform.formdata.step10.mrs")}
                </label>{" "}
                &nbsp; &nbsp;
                <input
                  className="salutation"
                  type="radio"
                  id="firma"
                  name="salutation"
                  value="firma"
                  checked={salutation === "Firma."}
                  onChange={() => setSalutation("Firma.")}
                />
                <label htmlFor="firma">
                  &nbsp; &nbsp;{t("stepform.formdata.step10.firma")}
                </label>
                &nbsp; &nbsp;
                <input
                  className="salutation"
                  type="radio"
                  id="mr"
                  name="salutation"
                  value="organisation."
                  checked={salutation === "organisation."}
                  onChange={() => setSalutation("organisation.")}
                />
                <label htmlFor="organisation">
                  &nbsp;&nbsp;{t("stepform.formdata.step10.organisation")}
                </label>
                &nbsp; &nbsp;
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 col-xs-12">
                <input
                  className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  value={first_name}
                  placeholder={t("stepform.formdata.step10.firstname")}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    handleInputChange();
                  }}
                />
              </div>

              <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 col-xs-12">
                <input
                  className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  value={last_name}
                  placeholder={t("stepform.formdata.step10.lastname")}
                  onChange={(e) => {
                    setLastName(e.target.value), handleInputChange();
                  }}
                />
              </div>

              <div className="col-12">
                <input
                  className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  value={telephone}
                  placeholder={t("stepform.formdata.step10.telephone")}
                  onChange={(e) => {
                    setTelephone(e.target.value), handleInputChange();
                  }}
                />
              </div>

              <div className="col-12">
                <input
                  className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  value={email}
                  placeholder={t("stepform.formdata.step10.email")}
                  onChange={(e) => {
                    setEmail(e.target.value), handleInputChange();
                  }}
                />
              </div>

              {error && (
                <div className="error_msg mt-3">
                  <p className="">{error}</p>
                </div>
              )}

              <div>
                <button className="nextbtn" onClick={handleSendRequest}>
                  {loader ? (
                    <div
                      className="spinner-border spinner-border-sm mr-2"
                      role="status"
                      aria-hidden="true"
                    ></div>
                  ) : null}
                  {t("button.btnsendRequest")}
                </button>
                <button
                  className="backbtn"
                  type="button"
                  onClick={handleBackButtonClick}
                >
                  {t("button.btnBack")}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {step === 9 && (
        <div className="text-left ">
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: lastStep }}
          />
          <button className="nextbtn" onClick={gotofirst}>
            {t("button.btninquiry")}
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
