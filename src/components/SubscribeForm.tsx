"use client";

import { subscribeFormSchema } from "@/lib/subscribeSchema";
import { validateSchema } from "@/lib/validation/validate";
import { useState } from "react";
import Loader from "./Loader";
import { ResponseCode } from "@/lib/constants";
import { useReCaptcha } from "next-recaptcha-v3";

interface FormErrors {
  email?: string;
  token?: string;
  general?: string;
}

const defaultFormFields = {
  email: "" as string,
  token: "" as string,
};

export default function SubscribeForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const { executeRecaptcha } = useReCaptcha();

  async function handleSubmit(): Promise<void> {
    const newErrors: any = {};

    const { error } = validateSchema(subscribeFormSchema, formFields);

    error?.details.forEach((detail) => {
      const [field] = detail.path;
      newErrors[field] = detail.message;
    });

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const token = await executeRecaptcha("form_submit");

      setIsLoading(true);
      const response = await fetch(`/api/subscribe`, {
        method: "POST",
        body: JSON.stringify({ ...formFields, token }),
      });

      try {
        const result = await response.json();

        if (
          result.code === ResponseCode.Ok ||
          result.code === ResponseCode.UnprocessableEntity
        ) {
          setSuccessMessage("Thank you for subscribing!");
          setFormFields(defaultFormFields);
        } else {
          setFormErrors({
            general: result.message,
          });
        }
      } catch (err: any) {
        setFormErrors({
          general: err.message,
        });
      }

      setIsLoading(false);
    }
  }

  return (
    <form
      id="subscribe"
      className="flex flex-col items-center gap-4"
      onKeyDown={(e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.code === "Enter") {
          e.preventDefault();
          handleSubmit();
        }
      }}
    >
      {isLoading && <Loader />}
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formFields.email}
        onChange={(e: any) =>
          setFormFields({ ...formFields, email: e.target.value })
        }
        className="w-full md:w-1/3 p-3 rounded-lg text-gray-900"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full md:w-1/3 px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition"
      >
        Subscribe
      </button>
      {Object.keys(formErrors).length > 0 && (
        <ul className="list-disc">
          {Object.values(formErrors).map((error) => (
            <li key={error} className="text-red-500 text-sm text-left">
              {error}
            </li>
          ))}
        </ul>
      )}
      {successMessage && (
        <p className="text-green-500 text-sm text-left">{successMessage}</p>
      )}
    </form>
  );
}
