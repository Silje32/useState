import { useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const updateList = () => {
    setList((prevList) => [...prevList, text]);
    setText("");
    console.log(list);
  };

  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
          console.log(text);
        }}
      />
      <button onClick={updateList}>add</button>
      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      text
    </>
  );
}

export default App;
