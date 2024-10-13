export default function H4(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4 className={`inline text-primary-500 ${props.className}`}>
      {props.children}
    </h4>
  );
}
