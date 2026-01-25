import PropTypes from "prop-types";

export default function PurposeButton({ mode, purpose, text, icon, onClick }) {
  return purpose === "Translate" ? (
    <button
      className={` btn btn-md m-1 btn-danger`}
      onClick={() => onClick()}
      disabled={!text}
    >
      {purpose} {icon}
    </button>
  ) : (
    <button
      className={`${!mode ? "btn-dark " : "btn-light"} btn btn-sm m-1 `}
      onClick={() => onClick()}
      disabled={!text}
    >
      {purpose} {icon}
    </button>
  );
}

PurposeButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  purpose: PropTypes.string.isRequired,
};
