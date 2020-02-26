interface Point {
  x: number;
  y: number;
}

function getCount(array: Point[]): number {
  let count: number = 0;

  for (const point of array) {
    if (point.x === point.y) {
      count++;
    }
  }

  return count;
}

export default function solveProblem6(): void {
  const data: Point[] = [
    {
      x: 1,
      y: 1
    },
    {
      x: 2,
      y: 3
    },
    {
      x: 3,
      y: 3
    },
    {
      x: 3,
      y: 4
    },
    {
      x: 4,
      y: 5
    }
  ];

  const count: number = getCount(data);
  console.log(count);
}
