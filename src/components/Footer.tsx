import Link from "next/link";
import InstagramIcon from "./common/Instagram";
import TiktokIcon from "./common/Tiktok";

export default function footer() {
  return (
    <footer className="flex flex-col gap-2 py-8 bg-gray-900 text-gray-400 text-center">
      <p>
        Centuries Echoing Legends Eventually Shape The Ancient Ruins Around.
      </p>
      <p className="flex items-center justify-center gap-4">
        <Link
          href="https://www.instagram.com/fragments_of_eternity_/"
          className="rounded-full transition ease-in-out duration-200"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.tiktok.com/@fragments_of_eternity_"
          className="rounded-full transition ease-in-out duration-200"
          target="_blank"
        >
          <TiktokIcon />
        </Link>
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
