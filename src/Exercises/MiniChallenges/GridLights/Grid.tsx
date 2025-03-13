export default function Grid({ onClick, selected }) {
  function onSelect() {
    if (!selected) onClick();
  }
  return (
    <div
      onClick={() => onSelect()}
      className={`${
        selected
          ? "bg-green-500 cursor-not-allowed"
          : "bg-gray-200 cursor-pointer"
      } w-40 h-40 border-solid border-2 rounded border-gray-800`}
    ></div>
  );
}
