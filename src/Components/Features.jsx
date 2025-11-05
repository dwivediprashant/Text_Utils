import { Link } from "react-router-dom";

export default function Features({ mode }) {
  const textClass = mode ? "text-light" : "text-dark";

  return (
    <div className="container my-5 features">
      <h1 className={`text-primary mb-4 fw-bold border-bottom`}>Features</h1>

      <ul className={`list-unstyled ${textClass} mb-4`}>
        <li className="mb-3">
          <strong>🔠 Convert to Uppercase:</strong> Quickly change your text
          into uppercase letters.
        </li>
        <li className="mb-3">
          <strong>🔡 Convert to Lowercase:</strong> Instantly make all letters
          lowercase for uniform style.
        </li>
        <li className="mb-3">
          <strong>📋 Copy Text:</strong> Copy your formatted text to clipboard
          in one click.
        </li>
        <li className="mb-3">
          <strong>🔊 Speak Text:</strong> Listen to your text using the
          browser’s speech engine.
        </li>
        <li className="mb-3">
          <strong>🔁 Reverse Text:</strong> Flip your text backward easily with
          a single button.
        </li>
        <li className="mb-3">
          <strong>🧹 Clear Text:</strong> Remove all text instantly and start
          fresh again.
        </li>
      </ul>

      <div className="text-center">
        <Link to="/" className="btn btn-primary px-4 py-2 fw-semibold">
          Let’s Try
        </Link>
      </div>
    </div>
  );
}
