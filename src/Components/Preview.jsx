export default function Preview(props) {
  return (
    <div className="my-3 ps-4 pe-3 ">
      <h4>Preview appear below : -</h4>
      {props.text === "" ? (
        <p className="text-secondary">You haven't write yet ...</p>
      ) : (
        <p
          className="text-wrap text-break preview"
          style={{ maxWidth: "100%" }}
        >
          {props.text}
        </p>
      )}
    </div>
  );
}
