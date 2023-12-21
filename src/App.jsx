import { useState } from "react";
import "./App.css";

function App() {
  const [greetingText, setGreetingText] = useState("");

  const handleClickSawadee = () => {
    setGreetingText("สวัสดี!");
  };

  const handleClickHi = () => {
    setGreetingText("Hi!");
  };


  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
        <div className="buttons">
        <button onClick={handleClickSawadee}>สวัสดี!</button>
        <button onClick={handleClickHi}>Hi!</button>
        <button onClick={()=>{
             setGreetingText("你好!");
        }}>你好!</button>
      </div>
    </div>
  );
}

export default App;
