import React from "react";

const Greet = (props) => {
  return (
    <>
      <div className="text-center">
        <h1>Welcome {props.name} {props.sname}</h1>
      </div>
    </>
  );
};
export default Greet;