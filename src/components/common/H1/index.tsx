export default function H1(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-4xl text-primary-500 font-bold mb-8 ${props.className}`}
    >
      {props.children}
    </h1>
  );
}
