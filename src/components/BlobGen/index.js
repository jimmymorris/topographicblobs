import React from 'react'
import generateCoordinates from '../../helpers/generateCoordinates'
import catmullRom2bezier from '../../helpers/catmullRom2bezier'
import getRandomRadiusModifier from '../../helpers/getRandomRadiusModifier'

const BlobGen = ({ height = 1024, width = 1024 }) => {
  let pathDArray = [];

  const vertixCountFactor = 0.5;
  const offset = getRandomRadiusModifier(25);
  const levels = [
    {
      radius: 100 - offset,
      color: '#E6FFFA'
    },
    {
      radius: 125 - offset,
      color: '#B2F5EA'
    },
    {
      radius: 150 - offset,
      color: '#81E6D9'
    },
    {
      radius: 200 - offset,
      color: '#4FD1C5'
    },
    {
      radius: 225 - offset,
      color: '#38B2AC'
    },
    {
      radius: 250 - offset,
      color: '#319795'
    },
    {
      radius: 275 - offset,
      color: '#2C7A7B'
    },
    {
      radius: 300 - offset,
      color: '#285E61'
    },
    {
      radius: 325 - offset,
      color: '#234E52'
    }
  ].sort((a, b) => a.radius < b.radius ? 1 : -1)
  // const angle = 0;
  const centerX = ((width - getRandomRadiusModifier(100)) / 2);
  const centerY = ((height - getRandomRadiusModifier(100)) / 2);

  pathDArray = levels.map((level) => {
    const coords = generateCoordinates({
      vertixCountFactor,
      centerX: centerX,
      centerY: centerY,
      radius: level.radius
    });

    let path = 'M';
    const blob = catmullRom2bezier(coords);

    return {
      color: level.color,
      blob
    }
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{
        contain: 'strict',
        strokeWidth: '0px'
      }}>
        {
          pathDArray.map(({color, blob}) => (
            <path
              key={color}
              fill={color}
              d={blob}
              opacity={1}
            />
          ))
        }
      </svg>

  )
}

export default BlobGen;