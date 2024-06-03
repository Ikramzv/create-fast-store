import { useSyncExternalStore } from "react";

type NewState<State> = Partial<State> | ((state: State) => Partial<State>);

class Store<State> {
  private state: State;
  private subscribers = new Set<(state: State) => void>();

  constructor(
    create: (
      get: () => State,
      set: (newState: NewState<State>) => void
    ) => State
  ) {
    this.state = create(this.get.bind(this), this.set.bind(this));
  }

  subscribe(cb: (state: State) => void) {
    this.subscribers.add(cb);
    return () => {
      this.subscribers.delete(cb);
    };
  }

  get() {
    return this.state;
  }

  set(newState: NewState<State>) {
    this.state = {
      ...this.state,
      ...(typeof newState === "function" ? newState(this.get()) : newState),
    };

    this.subscribers.forEach((cb) => cb(this.state));
  }
}

function createStore<State>(
  createFunction: (
    get: () => State,
    set: (newState: NewState<State>) => void
  ) => State
) {
  const store = new Store(createFunction);

  function useStore<T = State>(cb?: (state: State) => T): T {
    const state = useSyncExternalStore(
      (onStoreChange) => store.subscribe(onStoreChange),
      () => (cb ? cb(store.get()) : store.get())
    );

    return state as T;
  }

  useStore.subscribe = store.subscribe.bind(store);
  useStore.setState = store.set.bind(store);
  useStore.getState = store.get.bind(store);

  return useStore;
}

export default createStore;
