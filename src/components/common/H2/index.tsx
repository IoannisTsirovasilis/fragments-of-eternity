export default function H2(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-3xl text-primary-500 mb-4 ${props.className}`}>
      {props.children}
    </h1>
  );
}
