import { useEffect, useState } from "react";
import "./App.css";

const colours: string[] = ["red", "white", "blue", "yellow"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleColourChange = (colour: string) => {
    setBackgroundColor(colour);
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <>
      {colours.map((colour: string) => (
        <button key={colour} onClick={() => handleColourChange(colour)}>
          {colour}
        </button>
      ))}
    </>
  );
}

export default App;
