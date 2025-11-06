import PurposeButton from "./PurposeButton";
export default function PurposeBtnGroup({ text, setText, mode, showAlert }) {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      <PurposeButton
        mode={mode}
        purpose="To uppercase"
        text={text}
        onClick={() => {
          setText(text.toUpperCase());
          showAlert({ message: "Changed to uppercase", type: "success" });
        }}
      />
      <PurposeButton
        mode={mode}
        purpose="To lowercase"
        text={text}
        onClick={() => {
          setText(text.toLowerCase());
          showAlert({ message: "Changed to lowercase", type: "success" });
        }}
      />
      <PurposeButton
        mode={mode}
        purpose="Copy text"
        text={text}
        icon={<i className="fa-solid fa-copy"></i>}
        onClick={async () => {
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              await navigator.clipboard.writeText(text);
              showAlert({ message: "Text copied!", type: "success" });
            } else {
              // Fallback for older mobile browsers
              const textarea = document.createElement("textarea");
              textarea.value = text;
              document.body.appendChild(textarea);
              textarea.select();
              document.execCommand("copy"); //execCommand is deprecated for now but older browser supports
              document.body.removeChild(textarea);
              showAlert({ message: "Text copied", type: "success" });
            }
          } catch (error) {
            showAlert({ message: "Failed to copy text!", type: "danger" });
            console.error(error);
          }
        }}
      />

      <PurposeButton
        mode={mode}
        purpose="Speak"
        text={text}
        icon={<i className="fa-solid fa-volume-high"></i>}
        onClick={() => {
          const utterance = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utterance);
        }}
      />
      <PurposeButton
        mode={mode}
        purpose="Reverse"
        text={text}
        icon={<i className="fa-solid fa-arrows-rotate"></i>}
        onClick={() => {
          setText(text.split("").reverse().join(""));
          showAlert({ message: "Text reveresed", type: "success" });
        }}
      />
      <PurposeButton
        mode={mode}
        purpose="Clear"
        text={text}
        icon={<i className="fa-solid fa-trash"></i>}
        onClick={() => {
          setText("");
          showAlert({ message: "Text cleared !", type: "success" });
        }}
      />
    </div>
  );
}
