interface Header {
  name: string;
  children: JSX.Element;
}

export default function Header({ name, children }: Header) {
  return (
    <div className="bg-blue-300 py-5 px-14 flex justify-between items-center text-white">
      <h2 className="text-3xl font-serif">{name}</h2>
      <div>{children}</div>
    </div>
  );
}
