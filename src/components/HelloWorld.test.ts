/**
 * @vitest-environment happy-dom
 */

import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";

import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld tests", () => {
  it("should increment the count on clicking the button", async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("button").text()).toEqual("count is: 1");
  });
});
