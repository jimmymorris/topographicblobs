import React, { useState, useEffect } from "react";

import BorderBlobs from "./components/BorderBlobs";

import generateBorderCoords from "./helpers/generateBorderCoords";

function App() {
  const [coords, setCoords] = useState("");
  const colorGroup = [
    "#628d5e",
    "#91ad8d",
    "#c0cfbe",
    "#f1f1f1",
    "#e3eeed",
    "#d5ecea",
    "#c7e9e7"
  ].reverse();
  const sizeRange = [(colorGroup.length - 1) * 100, colorGroup.length * 100];
  const gapRange = [(colorGroup.length - 1) * 10, colorGroup.length * 10];

  useEffect(() => {
    setCoords(generateBorderCoords());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%"
      }}
    >
      <BorderBlobs
        colorGroup={colorGroup}
        maxWidth={sizeRange}
        maxHeight={sizeRange}
        widthGap={gapRange}
        heightGap={gapRange}
        coords={coords}
      />
      <button
        style={{
          padding: "16px 8px",
          width: "150px",
          appearance: "none",
          background: "white",
          color: "black",
          position: "fixed",
          bottom: "5vh",
          left: "calc(50% - 75px)",
          fontSize: "1rem"
        }}
        onClick={() => setCoords(generateBorderCoords())}
      >
        CREATE BLOB
      </button>
    </div>
  );
}

export default App;
