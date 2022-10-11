import React from "react";

export default function ErrorMessage(props) {
  const errorMsg = props.formError[props.name];
  return <span className="text-danger">{errorMsg}</span>;
}
