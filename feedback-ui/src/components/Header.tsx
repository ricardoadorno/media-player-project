import React from "react";

function Header({ text }: { text: string }) {
  const [color, setColor] = React.useState("white");

  const BgColor = {
    backgroundColor: "#ff6a95",
    padding: "5px",
    borderRadius: "15px",
    marginTop: "10px",
  };

  return (
    <header style={{ color: `${color}` }}>
      <div className="container">
        <h1 style={BgColor}>{text}</h1>
      </div>
    </header>
  );
}

export default Header;
