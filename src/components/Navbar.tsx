import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary-500 text-2xl">
          <Link href="/">FOE</Link>
        </div>
        <div>
          <Link
            href="/assets"
            className="text-primary-500 font-bold hover:text-primary-600 transition-color duration-300 ease-in-out border-0 rounded-xl p-4"
          >
            Assets
          </Link>
          <Link
            href="#subscribe"
            className="bg-primary-500 text-black  font-bold hover:bg-primary-600 transition-color duration-300 ease-in-out border-0 rounded-xl p-4"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
}
