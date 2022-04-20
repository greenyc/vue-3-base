/**
 * @vitest-environment happy-dom
 */

import { expect, describe, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useCounterStore } from '../stores/counter'

import Counter from "./Counter.vue";

describe("Counter tests", () => {
  it("should render", () => {
    const wrapper = mount(Counter, {
      global: { plugins: [createTestingPinia({ createSpy: vi.fn })] },
    });
    expect(wrapper.exists());
  });

  it("should increment the count on clicking the button", async () => {
    const wrapper = mount(Counter, {
      global: { plugins: [createTestingPinia({ createSpy: vi.fn })] },
    });

    const store = useCounterStore()

    await wrapper.find("button").trigger("click");
    
    expect(store.increment).toHaveBeenCalledTimes(1)
  });
});
