import PropTypes from "prop-types";

export default function PurposeButton({ mode, purpose, icon, onClick }) {
  return (
    <button
      className={`${!mode ? "btn-dark " : "btn-light"} btn btn-sm m-1 `}
      onClick={onClick}
    >
      {purpose} {icon}
    </button>
  );
}
PurposeButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onclick: PropTypes.func.isRequired,
  purpose: PropTypes.string.isRequired,
};
