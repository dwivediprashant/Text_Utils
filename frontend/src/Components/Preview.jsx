export default function Preview(props) {
  return (
    <div className="my-3 ps-4 pe-3 ">
      <h4>Preview appear below : -</h4>
      {props.text === "" ? (
        <p className="text-secondary">You haven't write yet ...</p>
      ) : (
        <div
          className={`${!props.mode ? "old-paper" : "old-paper-dark"} p-2 my-3 mx-4`}
        >
          <p
            className="text-primary text-wrap text-break preview"
            style={{ maxWidth: "100%" }}
          >
            {props.text}
          </p>
        </div>
      )}
    </div>
  );
}
