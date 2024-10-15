import AssetLink from "@/components/common/AssetLink";
import H2 from "@/components/common/H2";

export default function Assets() {
  return (
    <section className="flex flex-col pt-24 md:pt-20 px-6 pb-6">
      <H2 className="text-center">Assets</H2>
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
    </section>
  );
}
