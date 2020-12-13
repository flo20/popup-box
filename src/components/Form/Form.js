import React, { Fragment, useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    heading: "",
    text: "",
  });

  const handleFormChange = ({ target: inputs }) => {
    const updates = { ...input };
    updates[inputs.name] = inputs.value;
    setInput(updates);
  };
  return (
    <Fragment>
      <div>
        Topic:
        <input
          type="text"
          name="heading"
          value={input.heading}
          onChange={handleFormChange}
        />
      </div>

      <div>
        Explanation:
        <input
          type="text"
          name="text"
          value={input.text}
          onChange={handleFormChange}
        />
      </div>
     
    </Fragment>
  );
};

export default Form;
