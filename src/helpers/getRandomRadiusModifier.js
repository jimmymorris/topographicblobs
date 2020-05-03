const getRandomRadiusModifier = (max = 10) => {
  let num = Math.floor(Math.random() * max) + 1;
  num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  return num
}

export default getRandomRadiusModifier