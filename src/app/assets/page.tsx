import Image from "next/image";
import Link from "next/link";

export default function Assets() {
  return (
    <section className="py-20 px-6 bg-gray-800 text-white" id="act-one">
      <div className="container mx-auto">
        <h2 className="text-4xl font-medieval text-yellow-500 text-center mb-8">
          Assets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-medieval text-yellow-500 mb-4">
              The Land of Marona
            </h3>
            <Link href="/images/the-land-of-marona.webp" target="_blank">
              <Image
                src="/images/the-land-of-marona.webp"
                alt="The Land Of Marona"
                className="w-full rounded-xl"
                width={520}
                height={293}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
