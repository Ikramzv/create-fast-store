import useCounterStore from "./store/counter-store";

function CountInput() {
  const count = useCounterStore((state) => state.count);

  // re-render when only count changes

  return (
    <input
      type="number"
      min={0}
      max={50}
      value={count}
      onChange={() => ""}
      className="col-span-2 py-1.5 px-3 rounded-lg border border-gray-100 outline-none
          hover:border-gray-200 focus:border-gray-300 duration-200 text-sm"
    />
  );
}

export default CountInput;
