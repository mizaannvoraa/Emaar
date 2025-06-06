"use client";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter, usePathname } from "next/navigation";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  phone: Yup.string()
    .min(7, "Enter a valid phone number")
    .required("Phone number is required"),
  // Removed agreeToUpdates from Yup validation so browser can handle native required
});

const extractTrackingParams = () => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_ad: params.get("utm_ad") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_placement: params.get("utm_placement") || "",
    utm_keyword: params.get("utm_keyword") || "",
    gclid: params.get("gclid") || "",
    fbclid: params.get("fbclid") || "",
  };
};

const RegistrationForm = ({ countryFromURL }) => {
  const router = useRouter();
  const [trackingParams, setTrackingParams] = useState({});

  useEffect(() => {
    setTrackingParams(extractTrackingParams());
  }, []);
  const pathname = usePathname(); // ✅ Needed to read the path

  const [phoneCountry, setPhoneCountry] = useState("ae");

  const countryCodeMap = {
    canada: "ca",
    us: "us",
    turkey: "tr",
    india: "in",
    dubai: "ae",
    uae: "ae",
    uk: "gb",
    london: "gb",
    birhim: "bh",
    birmingham: "gb",
    france: "fr",
    paris: "fr",
    germany: "de",
  };

  const getPhoneCountryCode = (country) => {
    return countryCodeMap[country?.toLowerCase()] || "ae";
  };

  const getCountryFromPath = () => {
    const segments = pathname.split("/").filter(Boolean);
    return segments[0] || countryFromURL || "ae";
  };

  useEffect(() => {
    const countryFromPath = getCountryFromPath();
    setPhoneCountry(getPhoneCountryCode(countryFromPath));
  }, [pathname, countryFromURL]);
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const payload = {
      name: values.fullName,
      email: values.email,
      mobile: values.phone,
      agreeToUpdates: values.agreeToUpdates,
      ...trackingParams,
    };

    try {
      // Submit to Google Sheet
      const sheetRes = await fetch(
        "https://script.google.com/macros/s/AKfycbyF0fJNpeDu8zutb2n5TemctlWKxk5au43Z6OC9ElKS1aMXh6OjByfdltgGCmJT25_LRw/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );
      const sheetResult = await sheetRes.text();

      // Submit to CRM API
      const crmPayload = {
        name: payload.name,
        email: payload.email,
        mobile: payload.mobile,
        source: payload.utm_source || "Google",
        campaign: payload.utm_campaign || "",
        notes: `
UTM Source: ${payload.utm_source || ""}
UTM Campaign: ${payload.utm_campaign || ""}
UTM Ad: ${payload.utm_ad || ""}
UTM Placement: ${payload.utm_placement || ""}
GCLID: ${payload.gclid || ""}
FBCLID: ${payload.fbclid || ""}
UTM Keywords: ${payload.utm_keyword || ""}`,
      };

      const crmRes = await fetch(
        "https://api.cparamount.com/leads/web-hook/campaigns?access_token=YUFZVDMSFFQKNDYWZKRLYBDIA",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          body: JSON.stringify(crmPayload),
        }
      );

      const crmResult = await crmRes.json();

      resetForm();
      router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl lato font-extralight tracking-[0.7px] text-gray-800 mb-2">
          Register Your Interest
        </h2>
        <p className="text-sm text-gray-600">
          Get exclusive access to investment opportunities
        </p>
      </div>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          agreeToUpdates: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, errors, touched, values }) => (
          <Form className="space-y-5">
            <div>
              <label
                className="text-sm font-semibold text-gray-700 block mb-2"
                htmlFor="fullName"
              >
                Full Name *
              </label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                className={`w-full border-2 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                  errors.fullName && touched.fullName
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-500"
                }`}
                placeholder="Enter your full name"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-xs mt-1 font-medium"
              />
            </div>

            <div>
              <label
                className="text-sm font-semibold text-gray-700 block mb-2"
                htmlFor="email"
              >
                Email Address *
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`w-full border-2 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                  errors.email && touched.email
                    ? "border-red-300 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-500"
                }`}
                placeholder="Enter your email address"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1 font-medium"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-700 block mb-2"
              >
                Phone Number *
              </label>
              <Field name="phone">
                {({ field, form }) => (
                  <>
                    <PhoneInput
                      country={phoneCountry}
                      value={field.value}
                      onChange={(value) => form.setFieldValue("phone", value)}
                      inputProps={{
                        name: "phone",
                        id: "phone",
                        required: true,
                        autoComplete: "tel",
                        placeholder: "Enter your phone number",
                      }}
                      containerClass="!w-full"
                      inputClass={`!w-full !bg-[#F2F4F6] !h-[52px] !pl-14 !pr-4 !border-2 !rounded-lg !text-gray-800 !placeholder-gray-400 transition-colors duration-200 focus:!outline-none focus:!ring-2 focus:!ring-blue-500/20 ${
                        form.errors.phone && form.touched.phone
                          ? "!border-red-300 focus:!border-red-500"
                          : "!border-gray-200 focus:!border-blue-500"
                      }`}
                      buttonClass=" !bg-transparent !ml-[3px] !border-none !rounded-l-[6px] !h-[48px] !mt-[2px] !flex !items-center !justify-center"
                      dropdownClass="!text-sm !bg-white !border !border-gray-200 !rounded-lg !shadow-lg !mt-1"
                    />
                    {form.errors.phone && form.touched.phone && (
                      <div className="text-red-500 text-xs mt-1 font-medium">
                        {form.errors.phone}
                      </div>
                    )}
                  </>
                )}
              </Field>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-600 leading-relaxed">
                Please visit our{" "}
                <a
                  href="https://properties.emaar.com/en/privacy-policy/"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                  rel="noopener noreferrer"
                >privacy policy</a> to understand how Emaar handles your personal data.
              </p>
            </div>

            {/* Checkbox with native browser validation */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreeToUpdates"
                id="agreeToUpdates"
                required
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={(e) =>
                  setFieldValue("agreeToUpdates", e.target.checked)
                }
                checked={values.agreeToUpdates}
              />
              <label
                htmlFor="agreeToUpdates"
                className="text-sm text-gray-700 leading-relaxed cursor-pointer"
              >
                Keep me updated on news, offers, and exclusive investment
                opportunities
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:py-4 py-2 md:px-6 rounded-lg font-semibold text-white transition-all duration-200 transform ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#051832] hover:bg-transparent hover:text-black hover:border hover:border-black cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                "Submit Registration"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
