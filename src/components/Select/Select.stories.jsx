import React from "react";
import { Select } from "./Select";

export default {
  title: "Test/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: "Small Select",
  size: "small",
  options: ["1", "2", "3"],
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Medium Select",
  size: "medium",
  options: ["1", "2", "3"],
};

export const Large = Template.bind({});
Large.args = { label: "Large Select", size: "large", options: ["1", "2", "3"] };
