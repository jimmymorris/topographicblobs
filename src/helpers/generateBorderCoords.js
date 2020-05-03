import randomNumber from "./randomNumber";

const generateBorderCoords = () => {
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

  br.a = randomNumber(20, 90);
  br.b = 100 - br.a;
  br.c = randomNumber(20, 90);
  br.d = 100 - br.c;
  br.e = randomNumber(20, 90);
  br.h = 100 - br.e;
  br.f = randomNumber(20, 90);
  br.g = 100 - br.f;

  return `${br.a}% ${br.b}% ${br.c}% ${br.d}% / ${br.e}% ${br.f}% ${br.g}% ${
    br.h
    }%`;
};

export default generateBorderCoords;
