import Link from "next/link";
import H3 from "../H3";
import Image from "next/image";

export default function AssetLink(props: {
  alt: string;
  target?: string;
  src: string;
  title: string;
  href: string;
}) {
  return (
    <>
      <Link
        href={props.href}
        target={props.target ?? "_self"}
        className="hover:text-primary-600 hover:underline"
      >
        <H3>{props.title}</H3>

        <div className="aspect-square">
          <Image
            src={props.src}
            alt={props.alt}
            className="w-full h-full object-cover rounded-xl"
            width={500}
            height={500}
          />
        </div>
      </Link>
    </>
  );
}
