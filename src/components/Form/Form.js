import React, { Fragment, useState } from "react";
import Message from "../Message/Message";

const Form = () => {
  const [input, setInput] = useState({
    heading: "",
    text: "",
    comments: "",
  });

  const handleFormChange = (e) => {};
  return (
    <Fragment>
      <Message />
      <div>
        Topic:
        <input type="text" onChange={handleFormChange} />
        <p>{input.heading}</p>
      </div>
      <div>
        Explanation:
        <input type="text" />
      </div>
      <label>Comments:</label>
      <div>
        <textarea />
      </div>
    </Fragment>
  );
};

export default Form;
