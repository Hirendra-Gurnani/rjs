import React from "react";
import PersonComp from "./Person";

function LoopComp() {
  let persons = [
    { id: 1, name: "Hirendra", age: 24, skills: "ReactJs" },
    { id: 2, name: "Komal", age: 33, skills: "Catia v5" },
    { id: 3, name: "Hirendra", age: 39, skills: "Angular" },
    { id: 4, name: "Yogi", age: 34, skills: "RSM" },
  ];
  const personList = persons.map((person) => <PersonComp key={person.id} person={person} pid={person.id} />);
  return <>{ personList }</>;
}

export default LoopComp;
