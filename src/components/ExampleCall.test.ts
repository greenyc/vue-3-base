/**
 * @vitest-environment happy-dom
 */

import { defineComponent, h, Suspense } from "vue";
import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";

import ExampleCall from "./ExampleCall.vue";

const mountSuspense = async (component: any) => {
  const wrapper = mount(
    defineComponent({
      render() {
        return h(Suspense, null, {
          default: h(component),
          fallback: h("div", "fallback"),
        });
      },
    })
  );

  await flushPromises();
  return wrapper;
};

describe("ExampleCall tests", () => {
  it("should render", async () => {
    const wrapper = await mountSuspense(ExampleCall);
    expect(wrapper.exists());
  });

  // TODO: Work out how to change data inside setup() on tests
  // it("should get cat facts", async () => {
  //   const wrapper = mount(ExampleCall);
  //   wrapper.vm.facts = ["a", "b"];
  //   await wrapper.vm.$nextTick()
  //   expect(wrapper.find("p").text()).toEqual("a");
  // });
});
