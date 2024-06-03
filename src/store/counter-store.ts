import createStore from "../createStore";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  setCount(count: number): void;
}

const useCounterStore = createStore<CounterState>((get, set) => ({
  count: 0,
  increment() {
    set((state) => ({ ...state, count: state.count + 1 }));
  },
  decrement() {
    set((state) => ({ ...state, count: state.count - 1 }));
  },
  setCount(count) {
    set({ count });
  },
}));

useCounterStore.subscribe((state) => console.log("State updated: ", { state }));

// Set state outside of components, and
// it re-renders all subscribed components ( that is subscribed to state.count or entire state )
setInterval(() => {
  useCounterStore.setState((state) => ({ count: state.count + 1 }));
}, 1000);

export default useCounterStore;
