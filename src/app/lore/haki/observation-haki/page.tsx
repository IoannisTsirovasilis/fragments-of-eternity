import H2 from "@/components/common/H2";
import H4 from "@/components/common/H4";

export default function ObservationHaki() {
  return (
    <section className="py-20 px-6">
      <H2 className="text-center">Observation Haki</H2>
      <div className="flex flex-col gap-4">
        <p>
          <H4>Prerequisite:</H4> 3rd level, Wisdom 13 or higher, Proficiency in
          Perception or Insight
        </p>
        <hr className="border-primary-500" />
        <p>
          You&apos;ve developed the skills to heighten your senses and
          anticipate your opponent&apos;s moves. You gain the following
          benefits:
        </p>

        <p>
          <H4>Enhances Senses:</H4> You gain advantage on Wisdom (Perception)
          checks and initiative rolls. You can&apos;t be surprised while you are
          conscious.
          <br />
          <H4 className="italic">Scaling:</H4> At 10th level, you also gain
          advantage on saving throws against being blinded, charmed, or
          frightened. At 17th level, you gain advantage on all Wisdom saving
          throws.
        </p>
        <p>
          <H4>Precognitive Dodge:</H4> As a reaction when an attack hits you,
          you can impose disadvantage on the attack roll, potentially causing
          the attack to miss. You can use this ability a number of times equal
          to your proficiency bonus per long rest.
          <br />
          <H4 className="italic">Scaling:</H4> At 10th level, when you use this
          reaction, you can also move up to half your movement speed without
          provoking opportunity attacks. At 17th level, you gain the ability to
          use this feature an additional time per short rest.
        </p>
        <p>
          <H4>Danger Sense:</H4> Once per short rest, you can sense the presence
          of creatures within 60 feet of you, even if they are invisible or
          hidden. You know the number and general direction of creatures, but
          not their exact location unless they are within your line of sight.
          <br />
          <H4 className="italic">Scaling:</H4> At 10th level, the range of this
          ability increases to 120 feet. At 17th level, you can pinpoint
          creatures within 30 feet, knowing their exact location even if they
          are invisible or hidden.
        </p>
      </div>
    </section>
  );
}
