import React, { useState } from "react";
import GetDatasFromAPI from "./Api";

function InputPart({inputList}) {
  const [inputText, setInputText] = useState("");


  const OnChangeFunc = (e) => {
    setInputText(e.target.value);
  };

  const ClickInputButton = async () => {
    try {
      const result = await GetDatasFromAPI(inputText);

      inputList(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="input-part">
        <input onChange={OnChangeFunc} />
        <button className="input-button" onClick={ClickInputButton}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default InputPart;
