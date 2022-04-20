/**
 * @vitest-environment happy-dom
 */

import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";

import ExampleCall from "./ExampleCall.vue";

describe("ExampleCall tests", () => {
  it("should render", () => {
    const wrapper = mount(ExampleCall);
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
