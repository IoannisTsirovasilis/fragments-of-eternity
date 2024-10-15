import AssetLink from "@/components/common/AssetLink";
import H2 from "@/components/common/H2";
import H3 from "@/components/common/H3";

export default function Haki() {
  return (
    <section>
      <div className="flex flex-col gap-4 p-6">
        <H2 className="text-center">Haki</H2>
        <div>
          <H3>Disclaimer</H3>
          <p>
            I have been a One Piece fan for many years, and my admiration for
            its world-building inspired me to incorporate Haki into my own
            story. All elements related to Haki are adapted purely for fun and
            storytelling, with no intention of infringing on the original work.
          </p>
        </div>

        <div>
          <H3>What is Haki?</H3>
          <p>
            Haki is a mysterious force that exists within every living being, a
            manifestation of willpower that can transcend physical and magical
            limitations. In the world of Nulmaris, Haki is the embodiment of
            spiritual energy that enables its users to achieve extraordinary
            feats—heightened awareness, impenetrable defense, and unmatched
            dominance. Unlike ordinary abilities, Haki cannot be acquired
            through conventional training; it must be unlocked by tapping into
            one&apos;s innermost resolve. Those who have awakened Haki possess a
            formidable advantage, often standing as champions and legends of
            their time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AssetLink
            title="Armanent Haki"
            href="/lore/haki/armament-haki"
            src="/images/armament-haki.webp"
            alt="Armament Haki"
          />
          <AssetLink
            title="Observation Haki"
            href="/lore/haki/observation-haki"
            src="/images/observation-haki.webp"
            alt="Observation Haki"
          />
          <AssetLink
            title="Conqueror's Haki"
            href="/lore/haki/conquerors-haki"
            src="/images/conquerors-haki.webp"
            alt="Conqueror's Haki"
          />
        </div>
      </div>
    </section>
  );
}
