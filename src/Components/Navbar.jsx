import { Link } from "react-router-dom";

import Switch from "./Switch";
import Themes from "./Themes";

export default function Navbar({
  mode,
  setMode,
  showAlert,
  theme,
  changeTheme,
}) {
  const themeStyle = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-md p-2 sticky-top ${
          theme.backgroundColor ? "" : mode === false ? "bg-info" : "bg-primary"
        }`}
        style={theme.backgroundColor ? themeStyle : {}}
      >
        <img
          src={`${mode ? "../../logo.jpg" : "../../logo.png"}`}
          alt="logo"
          className="logo ms-3"
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end me-5 "
          id="navbarNav"
        >
          <Link
            className={`btn mx-3 nav-link ${mode ? "text-light" : "text-dark"}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`btn mx-3 nav-link ${mode ? "text-light" : "text-dark"}`}
            to="/features"
          >
            Features
          </Link>
          <Link
            className={`btn mx-3 nav-link ${mode ? "text-light" : "text-dark"}`}
            to="/about"
          >
            About
          </Link>

          <span className="d-flex justify-content-center align-items-center my-3">
            <a
              href="https://github.com/dwivediprashant"
              className={` mx-3 nav-link ${mode ? "text-light" : "text-dark"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <Themes changeTheme={changeTheme} showAlert={showAlert} />
            <Switch mode={mode} setMode={setMode} showAlert={showAlert} />
          </span>
        </div>
      </nav>
    </>
  );
}
