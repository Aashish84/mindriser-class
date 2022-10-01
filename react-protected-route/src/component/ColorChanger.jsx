import { useEffect } from "react";
import { useState } from "react";

import { SimpleButton } from "./ButtonCmp";

function ColorChanger() {
  let colors = [
    "#d4afb9",
    "#d1cfe2",
    "#9cadce",
    "#7ec4cf",
    "#daeaf6",
    "#ffafcc",
  ];

  const [colorBoxStyle, setColorBoxStyle] = useState({
    maxWidth: "700px",
    minHeight: "500px",
    margin: "auto",
    marginTop: "70px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  useEffect(() => {
    let saved_color = localStorage.getItem("bgcolor");
    if (saved_color) {
      setColorBoxStyle({ ...colorBoxStyle, backgroundColor: saved_color });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bgcolor", colorBoxStyle.backgroundColor);
  }, [colorBoxStyle]);

  function handleChange() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    // document.body.style.backgroundColor = color;
    setColorBoxStyle({ ...colorBoxStyle, backgroundColor: color });
  }

  return (
    <div className="color-box" style={colorBoxStyle}>
      <SimpleButton btnName="change color" handleClick={handleChange} />
    </div>
  );
}

export default ColorChanger;
