import Link from "next/link";

export default function footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400 text-center">
      <p>
        Centuries Echoing Legends Eventually Shape The Ancient Ruins Around.
      </p>
      <p>
        <Link
          className="hover:text-white duration-200"
          href={"/terms-and-conditions"}
          target="_blank"
        >
          Terms and Conditions
        </Link>{" "}
        |{" "}
        <Link
          className="hover:text-white duration-200"
          href={"/privacy-policy"}
          target="_blank"
        >
          Privacy Policy
        </Link>{" "}
        | © 2024 Fragments of Eternity. All rights reserved.
      </p>
    </footer>
  );
}
