import React from "react";

const User = (props) => {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h4>{props.data.age}</h4>
    </div>
  );
};

export default User;
