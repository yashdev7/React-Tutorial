import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Yash");

  const handleNameChange = () => {
    const names = ["Yash", "John", "Roman"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    console.log("You Clicked it");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was Clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name} !!</p>
      <button onClick={handleNameChange}>Change Name </button>
      <button onClick={() => handleClick2("Dave")}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;
