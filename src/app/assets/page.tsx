import AssetLink from "@/components/common/AssetLink";
import H1 from "@/components/common/H1";

export default function Assets() {
  return (
    <section className="py-20 px-6 bg-gray-800 text-white">
      <div className="container mx-auto">
        <H1 className="text-center">Assets</H1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AssetLink
            title="The Land of Marona"
            href="/images/the-land-of-marona.webp"
            src="/images/the-land-of-marona.webp"
            alt="The Land Of Marona"
            target="_blank"
          />
          <AssetLink
            title="Haki System"
            href="/lore/haki"
            src="/images/haki-system.webp"
            alt="Haki System"
          />
        </div>
      </div>
    </section>
  );
}
