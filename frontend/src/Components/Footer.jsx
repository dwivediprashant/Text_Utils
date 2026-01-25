export default function Footer({ mode, theme }) {
  const themeStyle = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  };
  return (
    <footer
      className={`d-flex align-items-center justify-content-center flex-column p-1 ${
        theme.backgroundColor ? "" : mode ? "bg-primary" : "bg-info"
      }`}
      style={theme.backgroundColor ? themeStyle : {}}
    >
      <p className={`${mode ? "text-light" : "text-dark"} mx-3`}>
        © {new Date().getFullYear()} TextUtils — All rights reserved.
      </p>
      <div>
        <span className={`${mode ? "text-light" : "text-dark"}`}>
          Connect :{" "}
        </span>
        <a
          href="https://github.com/dwivediprashant"
          className={`${mode ? "text-light" : "text-dark"} mx-3`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://dwivediprashant.github.io/portfolio/"
          className={`${mode ? "text-light" : "text-dark"} mx-3`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-user-tie"></i>
        </a>
      </div>
    </footer>
  );
}
