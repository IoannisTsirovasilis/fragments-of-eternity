import H2 from "@/components/common/H2";
import H4 from "@/components/common/H4";

export default function ConquerorsHaki() {
  return (
    <section className="py-20 px-6">
      <H2 className="text-center">Conqueror&apos;s Haki</H2>
      <div className="flex flex-col gap-4">
        <p>
          <H4>Prerequisite:</H4> 8th level, Charisma 13 or higher
        </p>
        <hr className="border-primary-500" />
        <p>
          You&apos;ve developed the skills to exert your Haki over others,
          demonstrating true dominance. You gain the following benefits:
        </p>

        <p>
          <H4>Conqueror&apos;s Presence:</H4> As an action, you can unleash your
          Haki in a 30-foot radius. Creatures of your choice within the area
          must succeed on a Wisdom saving throw (DC = 8 + your proficiency bonus
          + your Charisma modifier) or be stunned until the end of your next
          turn. If a creature&apos;s current hit points are lower than your
          level &times; 5, they automatically fail the saving throw. You can use
          this ability once per long rest.
          <br />
          <H4 className="italic">Scaling:</H4> At 14th level, the radius
          increases to 60 feet. At 17th level, you can use this ability twice
          per long rest.
        </p>
        <p>
          <H4>Intimidating Aura:</H4> You gain proficiency in Intimidation. If
          you are already proficient, you gain expertise in Intimidation,
          allowing you to add double your proficiency bonus to Intimidation
          checks. You can add your Charisma modifier to your Armor Class as a
          bonus while not wearing heavy armor, as your aura exudes dominance and
          control.
          <br />
          <H4 className="italic">Scaling:</H4> At 14th level, creatures within
          10 feet of you that fail the saving throw are also frightened of you
          until the end of your next turn. At 17th level, this range increases
          to 20 feet.
        </p>
        <p>
          <H4>Will of the Conqueror:</H4> Once per short rest, when you are
          reduced to 0 hit points, you can choose to drop to 1 hit point
          instead.
          <br />
          <H4 className="italic">Scaling:</H4> At 14th level, when you use this
          feature, you can also regain hit points equal to your Charisma
          modifier + your proficiency bonus. At 17th level, you regain hit
          points equal to twice your Charisma modifier + your proficiency bonus.
        </p>
      </div>
    </section>
  );
}
