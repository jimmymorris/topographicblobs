import React, { useLayoutEffect, useState, useCallback } from "react";

import randomNumber from "../../helpers/randomNumber";

const BorderBlobs = ({
  colorGroup = ["#495867", "#577399", "#bdd5ea", "#f7f7ff", "#fe5f55"],
  maxWidth = 500,
  maxHeight = 500,
  widthGap = 50,
  heightGap = 50,
  coords
}) => {
  const [levels, setLevels] = useState([]);

  const generateDimensions = ({ start, gap, count }) => {
    return new Array(count).fill(0).map(() => (start -= gap));
  };

  const createLevels = useCallback(() => {
    const widths = generateDimensions({
      start: randomNumber(maxWidth[0], maxWidth[1]),
      gap: randomNumber(widthGap[0], widthGap[1]),
      count: colorGroup.length
    });

    const heights = generateDimensions({
      start: randomNumber(maxHeight[0], maxHeight[1]),
      gap: randomNumber(heightGap[0], heightGap[1]),
      count: colorGroup.length
    });

    return colorGroup.map((color, idx) => {
      return {
        height: heights[idx],
        width: widths[idx],
        color: color,
        coords
      };
    });
  }, [maxWidth, widthGap, maxHeight, heightGap, colorGroup, coords]);

  useLayoutEffect(() => {
    setLevels(createLevels());
  }, [createLevels]);

  return (
    <>
      {levels.map((level, idx) => (
        <div
          key={`${level.color}-${idx}`}
          style={{
            background: level.color,
            height: level.height,
            width: level.width,
            borderRadius: level.coords,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition:
              "width 150ms ease, height 150ms ease, border-radius 150ms ease",
            boxShadow: "0 5px 10px rgba(0,0,0,0.25), 0 6px 6px rgba(0,0,0,0.23)"
          }}
        />
      ))}
    </>
  );
};

export default BorderBlobs;
