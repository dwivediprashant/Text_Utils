export default function ButtonGroup({ text, mode }) {
  return (
    <div
      className={`d-flex flex-wrap justify-content-center align-items-center btn mx-5 my-1 ${
        !mode ? " btn-dark" : "btn-light"
      }`}
    >
      <button
        className={`btn btn-sm btn-outline-secondary my-2 ${
          !mode ? "text-light" : "text-dark"
        } me-3`}
      >
        Total characters : {text.trim().length}
      </button>
      <button
        className={`btn btn-sm btn-outline-secondary my-2 ${
          !mode ? "text-light" : "text-dark"
        } me-3`}
      >
        Total words : {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
      </button>
      <button
        className={`btn btn-sm btn-outline-secondary my-2 ${
          !mode ? "text-light" : "text-dark"
        } me-3`}
      >
        Estimated Time to read : {(0.068 * text.trim().length).toFixed(2)} sec.
      </button>
    </div>
  );
}
