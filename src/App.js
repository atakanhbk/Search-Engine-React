import { useEffect, useState } from "react";
import "./App.css";
import InputPart from "./InputPart";

function App() {
  const [inputList, setInputList] = useState([]);

  const ConsoleLogList = (list) => {
    setInputList(list);
  };

  useEffect(() => {
    if (inputList.length !== 0) {
      inputList.forEach((element) => {
        console.log(element.links.download);
      });
    }
  }, [inputList]);

  return (
    <div className="App">
      <InputPart inputList={ConsoleLogList} />
    </div>
  );
}

export default App;
