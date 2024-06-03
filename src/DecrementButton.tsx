import Button from "./components/Button";
import useCounterStore from "./store/counter-store";

function DecrementButton() {
  const decrement = useCounterStore((state) => state.decrement);

  // doesn't re-render evenif count changes

  return (
    <Button
      onClick={decrement}
      className="col-span-1 bg-red-100 text-red-700 hover:bg-red-200"
    >
      Decrement
    </Button>
  );
}

export default DecrementButton;
