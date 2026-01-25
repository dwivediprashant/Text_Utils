export default function About({ mode }) {
  return (
    <div className="container my-4 about">
      <h1 className="mb-3 text-primary fw-bold border-bottom">
        About TextUtils
      </h1>
      <p className={`${mode ? "text-light" : "text-dark"}`}>
        <strong>TextUtils</strong>{" "}
        <span>
          is a simple yet powerful text manipulation web app that helps you
          analyze, transform, and format your text with ease. You can convert
          text to uppercase or lowercase, copy it, clear it, and even get
          instant text statistics like word and character count.
        </span>
      </p>

      <p className={`${mode ? "text-light" : "text-dark"}`}>
        This project was created as a practice project while learning React.js,
        focusing on reusable components, state management, and user-friendly
        design.
      </p>

      <hr />

      <h5 className="mt-4 text-info">Connect with the Developer</h5>
      <p className={`${mode ? "text-light" : "text-dark"}`}>
        Developed by <strong>Prashant Kumar Dwivedi</strong>.
      </p>

      <ul className="list-unstyled">
        <li className="text-primary">
          <i className="fa-brands fa-github"></i>&nbsp;
          <a
            href="https://github.com/dwivediprashant"
            className=" text-decoration-none"
          >
            Github account
          </a>
        </li>
        <li className="text-primary">
          <i className="fa-solid fa-envelope"></i>&nbsp;
          <a className="text-primary text-decoration-none">
            prashantdwivedi.0219@gmail.com
          </a>
        </li>
        <li className="text-primary">
          <i class="fa-solid fa-earth-europe"></i>&nbsp;
          <a
            href="https://dwivediprashant.github.io/portfolio/"
            className="text-primary text-decoration-none"
          >
            Portfolio
          </a>
        </li>
      </ul>

      <p className={`${mode ? "text-light" : "text-dark"}`}>
        Built with ❤️ using React and Bootstrap.
      </p>
    </div>
  );
}
