import React, { useState } from "react";

const RadioButtonComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"].map((option, index) => (
        <label
          key={index}
          style={{
            display: "block",
            color: index%2!==0 ? "red" : "black",
            margin: "8px 0",
          }}
        >
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleChange}
            style={{ marginRight: "8px" }}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButtonComponent;
