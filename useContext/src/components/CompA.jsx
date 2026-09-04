import React, { useState } from "react";
import userContext from "../context/user.context";
import CompB from "./CompB"

const CompA = () => {
  const [name, setName] = useState("");

  return (
    <div className="border-2 border-solid border-black p-15 m-8">
      <h1>Component A </h1>
      <label htmlFor="name">Enter your name</label>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        id="name"
        className="h-7 w-40 border-2 border-gray-200 mx-3 my-2 px-1 py-1 text-sm"
      ></input>
      <h2>{`Hy how are you ${name}`}</h2>
      <userContext.Provider value={ name }>
        <CompB />
      </userContext.Provider>
    </div>
  );
};

export default CompA;
