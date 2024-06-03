import CountInput from "./CountInput";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import Button from "./components/Button";
import useCounterStore from "./store/counter-store";

function App() {
  const setCount = useCounterStore((state) => state.setCount);

  // doesn't re-render evenif count changes

  return (
    <div className="flex justify-center pt-20">
      <div className="flex flex-col items-center gap-8">
        <div className="w-[400px] grid grid-cols-4 gap-3 border border-gray-300 p-2 rounded-xl">
          <CountInput />
          <IncrementButton />
          <DecrementButton />
        </div>
        <div className="w-[400px] grid grid-cols-4 gap-3 border border-gray-300 p-2 rounded-xl">
          <Button
            className="col-span-1 bg-yellow-100 text-yellow-700 py-1.5 hover:bg-yellow-200"
            onClick={() => setCount(100)}
          >
            Set 100
          </Button>
          <Button
            className="col-span-1 bg-orange-100 text-orange-700 py-1.5 hover:bg-orange-200"
            onClick={() => setCount(500)}
          >
            Set 500
          </Button>
          <Button
            className="col-span-1 bg-green-100 text-green-700 py-1.5 hover:bg-green-200"
            onClick={() => setCount(1000)}
          >
            Set 1000
          </Button>
          <Button
            className="col-span-1 bg-purple-100 text-purple-700 py-1.5 hover:bg-purple-200"
            onClick={() => setCount(9950)}
          >
            Set 9950
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
