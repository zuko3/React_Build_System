import React from "react";
import { TestCmp } from "../test-cmp";
import { shallow } from "enzyme";

describe("should render properly", () => {
  it("shuld check snapshot", () => {
    const wrapper = shallow(<TestCmp />);
    expect(wrapper).toMatchSnapshot();
  });
});
