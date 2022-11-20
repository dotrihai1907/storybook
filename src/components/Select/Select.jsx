import React from "react";
import PropTypes from "prop-types";
import "./select.css";

export const Select = ({ size, label, options, ...props }) => {
  return (
    <form>
      <label for="select">{label}</label>
      <select
        name="Select"
        id="select"
        {...props}
        className={["storybook-select", `storybook-select--${size}`].join(" ")}
      >
        {options?.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
};

Select.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  size: "medium",
  label: "Select",
  options: ["Value 1", "Value 2", "Value 3"],
  multiple: false,
  onChange: undefined,
};
