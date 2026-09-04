import React, { use } from "react";
import { useContext } from "react";
import ThemeContext from "../context/Theme.context";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-between bg-gray-200 items-center">
      <h1 className="px-3 py-3">Home</h1>
      <button
        onClick={() => {
          setTheme(theme == "light" ? "dark" : "light");
        }}
        className=" my-3 mx-3 p-3 rounded-lg w-20 bg-blue-500"
      >
        {theme == "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Navbar;
