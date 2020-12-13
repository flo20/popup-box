import React, { Fragment } from "react";

const Message = ({ datab }) => {
  return (
    <Fragment>
      <div>
        {datab.map(({ topic, body,id }) => (
          <div key={id}>
            <h3>{topic}</h3>
            <p style={{ width: "250px", textAlign: "center" }}>{body}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Message;
