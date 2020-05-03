// shoutout to https://github.com/ariutta/catmullrom2bezier/blob/master/catmullrom2bezier.js


const catmullRom2bezier = (pathDArray) => {

  let d = '';

  pathDArray.forEach((coord, index, array) => {
    let p = [];

    if (index === 0) {
      d += `M${coord.x},${coord.y} `;
      p.push(array[array.length - 3]);
      p.push(array[index]);
      p.push(array[index + 1]);
      p.push(array[index + 2]);
    } else if (index === array.length - 2) {
      p.push(array[index - 1]);
      p.push(array[index]);
      p.push(array[index + 1]);
      p.push(array[0]);
    } else if (index === array.length - 1) {
      return
    } else {
      p.push(array[index - 1]);
      p.push(array[index]);
      p.push(array[index + 1]);
      p.push(array[index + 2]);
    }

    let bp = [];

    bp.push({ x: p[1].x, y: p[1].y });
    bp.push({ x: ((-p[0].x + 6 * p[1].x + p[2].x) / 6), y: ((-p[0].y + 6 * p[1].y + p[2].y) / 6) });
    bp.push({ x: ((p[1].x + 6 * p[2].x - p[3].x) / 6), y: ((p[1].y + 6 * p[2].y - p[3].y) / 6) });
    bp.push({ x: p[2].x, y: p[2].y });

    d += "C" + bp[1].x + "," + bp[1].y + " " + bp[2].x + "," + bp[2].y + " " + bp[3].x + "," + bp[3].y + " ";

  })

  return d;
}

export default catmullRom2bezier;