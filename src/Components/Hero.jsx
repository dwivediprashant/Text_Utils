import { useState } from "react";

import Preview from "./Preview";
import PurposeBtnGroup from "./PurposeBtnGroup";
import ButtonGroup from "./ButtonGroup";

export default function Hero({ mode, showAlert }) {
  const [text, setText] = useState("");
  const handleOnChange = (evt) => {
    setText(evt.target.value);
  };
  return (
    <div className={`${!mode ? "old-paper" : "old-paper-dark"} p-2 my-3 mx-4`}>
      <h2 className="text-center my-3">Write your text below ...</h2>
      <div className="d-flex flex-column justify-content-center my-3">
        <textarea
          rows={12}
          value={text}
          placeholder="Write text here ..."
          onChange={handleOnChange}
          className="mx-5"
        ></textarea>
        <ButtonGroup text={text} mode={mode} />
      </div>
      <PurposeBtnGroup
        text={text}
        setText={setText}
        mode={mode}
        showAlert={showAlert}
      />
      <>
        <Preview text={text} />
      </>
    </div>
  );
}
