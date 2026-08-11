import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Counter cannot exceed 20");
    }
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter cannot go beyoond 0");
    }
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Counter:{counter}
      </h1>
      <div style={{display:"flex",justifyContent:"center" ,gap:"30px"}}>
        <button onClick={increment} style={{height:"30px" ,backgroundColor:"blue", color:"white",border:"2px solid blue",borderRadius:"12px"}}>Increment</button>
        <button onClick={decrement} style={{height:"30px" ,backgroundColor:"green", color:"white",border:"2px solid green",borderRadius:"12px"}}>Decrement</button>
      </div>
    </>
  );
};

export default App;
