type Card = {
  title: string;
  children: JSX.Element;
};

export default function Card({ title, children }: Card) {
  return (
    <div className="min-w-48 bg-blue-500 text-white rounded p-5 z-10">
      <h4 className="">{title}</h4>
      <div className="mt-10 flex justify-center text-xl">{children}</div>
    </div>
  );
}
