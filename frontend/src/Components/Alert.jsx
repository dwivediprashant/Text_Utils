export default function Alert({ alert }) {
  return (
    alert.message && (
      <div className={`alert alert-${alert.type}`} role="alert">
        <i className="fa-solid fa-bell fa-shake"></i> {alert.message}
      </div>
    )
  );
}
