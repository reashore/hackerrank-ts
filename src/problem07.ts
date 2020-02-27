interface Rectangle {
  length: number;
  width: number;
  perimeter: number;
  area: number;
}

function getRectangle(width: number, length: number): Rectangle {
  const area: number = length * width;
  const perimeter: number = 2 * (length + width);

  const rectangle: Rectangle = {
    length,
    width,
    area,
    perimeter
  };

  return rectangle;
}

export default function solveProblem07(): void {
  const width: number = 4;
  const length: number = 5;
  const rectangle: Rectangle = getRectangle(width, length);

  console.log(rectangle);
}
