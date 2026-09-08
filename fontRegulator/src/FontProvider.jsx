import React, { useState } from "react";
import FontContext from "./context/Font.context";

function FontProvider({ children }) {
  const [fontSize, setFontSize] = useState(12);
  return (
    <FontContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontContext.Provider>
  );
}

export default FontProvider;
