"use client";

import { subscribeFormSchema } from "@/lib/subscribeSchema";
import { validateSchema } from "@/lib/validation/validate";
import { useState } from "react";
import Loader from "./Loader";
import { ResponseCode } from "@/lib/constants";

interface FormErrors {
  email?: string;
  general?: string;
}

const defaultFormFields = {
  email: "" as string,
};

export default function SubscribeForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  async function handleSubmit(): Promise<void> {
    const newErrors: any = {};

    const { error } = validateSchema(subscribeFormSchema, formFields);

    error?.details.forEach((detail) => {
      const [field] = detail.path;
      newErrors[field] = detail.message;
    });

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      const response = await fetch(`/api/subscribe`, {
        method: "POST",
        body: JSON.stringify(formFields),
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
    <form className="max-w-md mx-auto">
      {isLoading && <Loader />}
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formFields.email}
        onChange={(e: any) =>
          setFormFields({ ...formFields, email: e.target.value })
        }
        className="w-full p-3 rounded-lg text-gray-900"
      />
      {Object.keys(formErrors).length > 0 && (
        <ul className="mt-4 list-disc px-4">
          {Object.values(formErrors).map((error) => (
            <li key={error} className="text-red-500 text-sm text-left">
              {error}
            </li>
          ))}
        </ul>
      )}
      {successMessage && (
        <p className="text-green-500 text-sm text-left mt-4">
          {successMessage}
        </p>
      )}
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
      >
        Subscribe
      </button>
    </form>
  );
}
