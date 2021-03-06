import getRandomRadiusModifier from './getRandomRadiusModifier';

const generateCoords = ({
  vertixCountFactor,
  centerX,
  centerY,
  radius
}) => {
  const pathCoordinates = [];

  for (let i = 0; i < 2 * Math.PI; i += vertixCountFactor) {
    let x = (radius * Math.cos(i) + centerX) + getRandomRadiusModifier();
    let y = (radius * Math.sin(i) + centerY) + getRandomRadiusModifier();

    pathCoordinates.push({ x, y });

    if (i + vertixCountFactor >= 2 * Math.PI) {
      pathCoordinates.push(pathCoordinates[0])
    };

  };
  return pathCoordinates;
}

export default generateCoords;