import React from "react";

function PersonComp( {person} ) {
  return (
      <h3>
        I am {person.name}. I am {person.age} years old and I am well versed in{" "}
        {person.skills}
      </h3>
  );
}

export default PersonComp;
