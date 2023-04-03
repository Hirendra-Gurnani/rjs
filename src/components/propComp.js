import React from "react";
function Greet(props) {
  return (
    <>
      <div className="text-center"><h1>Hello {props.name}</h1></div>
    </>
  );
}
export default Greet;
