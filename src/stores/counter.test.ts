import { expect, describe, it, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCounterStore } from "./counter";

describe("Counter Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("increments", () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.count).toBe(1);
  });
});
