import React from "react";
// document.querySelector("h1").style.color = "red";
function Greet(props) {
  return (
    <>
      <div className="text-center"><h1>Hello {props.name}</h1></div>
    </>
  );
}
// console.log(document.querySelector("h1").style.color);
export default Greet;
