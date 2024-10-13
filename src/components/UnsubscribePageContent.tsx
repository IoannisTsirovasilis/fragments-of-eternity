"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ResponseCode } from "@/lib/constants";
import Loader from "./Loader";
import H1 from "./common/H1";

const successMessage = "You have been successfully unsubscribed.";
const errorMessage = "An error occurred. Please try again later.";

export default function UnsubscribePageContent() {
  const params = useSearchParams();
  const email = params.get("email");
  const id = params.get("token");

  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function unsubscribe() {
      try {
        const response = await fetch(`/api/unsubscribe`, {
          method: "POST",
          body: JSON.stringify({ email, id }),
        });
        const result = await response.json();
        if (result.code === ResponseCode.Ok) {
          setMessage(successMessage);
        } else {
          setMessage(errorMessage);
        }
      } catch {
        setMessage(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }

    if (email && id) {
      unsubscribe();
    } else {
      setMessage(errorMessage);
      setIsLoading(false);
    }
  }, [email, id]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {isLoading && <Loader />}
      <div className="text-center">
        <H1>Unsubscribe</H1>
        <p className="text-gray-300">{message}</p>
      </div>
    </div>
  );
}
