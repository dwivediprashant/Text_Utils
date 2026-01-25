import { useState } from "react";

import Preview from "./Preview";
import PurposeBtnGroup from "./PurposeBtnGroup";
import ButtonGroup from "./ButtonGroup";
import Loader from "../utils/loader";

export default function Hero({ mode, showAlert, translate }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const handleOnChange = (evt) => {
    setText(evt.target.value);
  };

  //--handle translate
  const handleTranslate = async () => {
    if (!text) return;
    setLoading(true);
    try {
      const translated = await translate(text);
      setText(translated);
      showAlert({ message: "Text Translated !", type: "success" });
    } catch (err) {
      showAlert({ message: "Translate failed", type: "danger" });
    } finally {
      setLoading(false);
    }
  };
  //----------
  return (
    <div
      className={`${!mode ? "old-paper" : "old-paper-dark"} p-2 my-3 mx-4`}
      style={{ position: "relative" }}
    >
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.08)",
            zIndex: 10,
          }}
        >
          <Loader />
        </div>
      )}

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
        onTranslate={handleTranslate}
      />
      <>
        <Preview text={text} mode={mode} />
      </>
    </div>
  );
}
