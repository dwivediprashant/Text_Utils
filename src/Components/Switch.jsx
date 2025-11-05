export default function Switch({ mode, setMode, showAlert }) {
  return (
    <div
      className={`custom-switch ${!mode ? "on" : ""}`}
      onClick={() => {
        setMode(!mode);
        mode
          ? showAlert({ message: "Light mode enabled", type: "light" })
          : showAlert({ message: "Dark mode enabled", type: "dark" });
      }}
    >
      <div className="switch-thumb ">
        <i className={`fa-solid ${!mode ? "fa-sun" : "fa-moon"}`}></i>
      </div>
    </div>
  );
}
