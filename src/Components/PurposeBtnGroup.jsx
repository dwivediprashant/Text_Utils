import PurposeButton from "./PurposeButton";
export default function PurposeBtnGroup({ text, setText, mode, showAlert }) {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      <PurposeButton
        mode={mode}
        purpose="To uppercase"
        onClick={() => {
          setText(text.toUpperCase());
          showAlert({ message: "Changed to uppercase", type: "success" });
        }}
      />
      <PurposeButton
        mode={mode}
        purpose="To lowercase"
        onClick={() => {
          setText(text.toLowerCase());
          showAlert({ message: "Changed to lowercase", type: "success" });
        }}
      />
      <PurposeButton
        mode={mode}
        purpose="Copy text"
        icon={<i className="fa-solid fa-copy"></i>}
        onClick={() => {
          navigator.clipboard.writeText(text);
          showAlert({ message: "Text copied !", type: "success" });
        }}
      />
      <PurposeButton
        mode={mode}
        purpose="Speak"
        icon={<i className="fa-solid fa-volume-high"></i>}
        onClick={() => {
          const utterance = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utterance);
        }}
      />
      <PurposeButton
        mode={mode}
        purpose="Reverse"
        icon={<i className="fa-solid fa-arrows-rotate"></i>}
        onClick={() => {
          setText(text.split("").reverse().join(""));
          showAlert({ message: "Text reveresed", type: "success" });
        }}
      />
      <PurposeButton
        mode={mode}
        purpose="Clear"
        icon={<i className="fa-solid fa-trash"></i>}
        onClick={() => {
          setText("");
          showAlert({ message: "Text cleared !", type: "success" });
        }}
      />
    </div>
  );
}
