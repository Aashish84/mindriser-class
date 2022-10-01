export function SimpleButton(props) {
  const btnStyle = {
    padding: "10px",
    margin: "3px",
  };
  return (
    <button onClick={props.handleClick} style={btnStyle}>
      {props.btnName}
    </button>
  );
}
