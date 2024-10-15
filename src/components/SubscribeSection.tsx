import H2 from "./common/H2";
import SubscribeForm from "./SubscribeForm";

export default function SubscribeSection() {
  return (
    <section className="p-6 bg-gray-900 text-center text-white">
      <H2>Subscribe for Updates</H2>
      <SubscribeForm />
    </section>
  );
}
