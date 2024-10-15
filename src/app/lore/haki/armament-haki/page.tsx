import H2 from "@/components/common/H2";
import H4 from "@/components/common/H4";

export default function ArmamentHaki() {
  return (
    <section className="p-6">
      <H2 className="text-center">Armament Haki</H2>
      <div className="flex flex-col gap-4">
        <p>
          <H4>Prerequisite:</H4> 3rd level, Strength or Dexterity 13 or higher,
          Proficiency in a martial weapon, unarmed strikes, or spell attacks
        </p>
        <hr className="border-primary-500" />
        <p>
          You&apos;ve developed the skills to fortify your body and imbue your
          attacks with powerful Haki. You gain the following benefits:
        </p>

        <p>
          <H4>Empowered Strikes:</H4> Your unarmed strikes, weapon attacks, or
          spell attacks count as magical to overcome resistance and immunity to
          nonmagical attacks and damage. This applies to melee and ranged spell
          attacks as well. However, this effect only applies if you are not
          under any condition (blinded, charmed, frightened, paralyzed,
          poisoned, etc.).
        </p>
        <p>
          <H4>Haki Armor:</H4> As a bonus action, you can coat your body,
          weapon, or spell with an invisible armor of Haki. For 1 minute, you
          gain one of the following benefits (choose when activating it):
          <br /> Gain a +2 bonus to your Armor Class (AC).
          <br />
          Gain a +2 bonus to all attack rolls (includes weapon attacks and spell
          attacks).
          <br />
          You can use this ability a number of times equal to your proficiency
          bonus per long rest.
          <br />
          <H4 className="italic">Scaling:</H4> At 10th level, the AC or attack
          roll bonus increases to +3. At 17th level, it increases to +4.
        </p>
        <p>
          <H4>Hardened Blows (or Spells):</H4> Once per short rest, you can
          declare one melee attack, weapon attack, or spell attack to deal an
          extra 2d6 force damage.
          <br />
          <H4 className="italic">Scaling:</H4> At 10th level, the extra damage
          increases to 3d6. At 17th level, it increases to 4d6.
        </p>
        <p>
          <H4>Condition:</H4> These benefits are only available if you are not
          affected by a debilitating condition (blinded, charmed, frightened,
          paralyzed, poisoned, etc.).
        </p>
      </div>
    </section>
  );
}
