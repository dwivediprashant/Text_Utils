export default function Themes({ changeTheme, showAlert }) {
  return (
    <div className="themes">
      <div
        className="theme-option bg-danger"
        onClick={() => {
          changeTheme({ backgroundColor: "red", color: "white" });
          showAlert({ message: "Changed to Red theme", type: "danger" });
        }}
        title="red theme"
      ></div>
      <div
        className="theme-option bg-success "
        onClick={() => {
          changeTheme({ backgroundColor: "green", color: "black" });
          showAlert({ message: "Changed to Green theme", type: "success" });
        }}
        title="green theme"
      ></div>
      <div
        className="theme-option bg-warning"
        onClick={() => {
          changeTheme({ backgroundColor: "orange", color: "black" });
          showAlert({ message: "Changed to Yellow theme", type: "warning" });
        }}
        title="yellow theme"
      ></div>
      <a
        href="/"
        className="mx-3 text-dark"
        title="Reset theme"
        onClick={(e) => {
          e.preventDefault();
          changeTheme({ backgroundColor: "", color: "" });
          showAlert({ message: "Default theme", type: "light" });
        }}
      >
        <i className="fa-solid fa-rotate"></i>
      </a>
    </div>
  );
}
