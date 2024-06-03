import Button from "./components/Button";
import useCounterStore from "./store/counter-store";

function IncrementButton() {
  const increment = useCounterStore((state) => state.increment);

  // doesn't re-render evenif count changes

  return (
    <Button
      onClick={increment}
      className="col-span-1 bg-blue-100 text-blue-700 hover:bg-blue-200"
    >
      Increment
    </Button>
  );
}

export default IncrementButton;
