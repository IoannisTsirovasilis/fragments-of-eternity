export default function H3(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-2xl text-primary-500 mb-4 ${props.className}`}>
      {props.children}
    </h3>
  );
}
