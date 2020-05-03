import React, { useEffect, useState } from 'react';

import randomNumber from '../../helpers/randomNumber'

const BorderBlobs = ({
  colorGroup =['#495867', '#577399', '#bdd5ea', '#f7f7ff', '#fe5f55'],
  maxWidth = 500,
  maxHeight = 500,
  widthGap = 50,
  heightGap = 50,
}) => {

  const [levels, setLevels] = useState([]);

  const generateDimensions = ({ start, gap, count }) => {
    return new Array(count).fill(0).map(() => start -= gap)
  }

  const generateCoords = () => {
    let br = {
      a: 0,
      b: 100,
      c: 0,
      d: 100,
      e: 0,
      f: 0,
      g: 100,
      h: 100
    };

    br.a = randomNumber(20, 80);
    br.b = 100 - br.a;
    br.c = randomNumber(20, 80);
    br.d = 100 - br.c;
    br.e = randomNumber(20, 80);
    br.h = 100 - br.e;
    br.f = randomNumber(20, 80);
    br.g = 100 - br.f;

    return `${br.a}% ${br.b}% ${br.c}% ${br.d}% / ${br.e}% ${br.f}% ${br.g}% ${br.h}%`;
  }

  const createLevels = (coords) => {
    setLevels(() => {
      const widths = generateDimensions({
        start: maxWidth,
        gap: widthGap,
        count: colorGroup.length
      });

      const heights = generateDimensions({
        start: maxHeight,
        gap: heightGap,
        count: colorGroup.length
      });

      return colorGroup.map((color, idx) => {
        return ({
          height: heights[idx],
          width: widths[idx],
          color: color,
          coords
        })
      })
    })
  };

  useEffect(() => {
    createLevels(generateCoords());
  }, [])

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
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'border-radius 300ms ease',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
          }}
        />
      ))}
      <button
        style={{
          padding: '16px 8px',
          width: '150px',
          appearance: 'none',
          background: 'white',
          color: 'black',
          position: 'fixed',
          bottom: '5vh',
          left: 'calc(50% - 75px)',
          fontSize: '1rem',
        }}
        onClick={() => createLevels(generateCoords())}
      >CREATE BLOB</button>
    </>
  )

}

export default BorderBlobs;