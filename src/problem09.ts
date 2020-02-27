function sides(literals: any, ...expressions: any[]) {
  const [area, perimeter] = expressions;
  const root = Math.sqrt(perimeter * perimeter - 16 * area);

  const s1 = (perimeter - root) / 4;
  const s2 = (perimeter + root) / 4;

  return [s1, s2];
}

export default function solveProblem09(): void {
  const side1: number = 2;
  const side2: number = 3;

  const area: number = side1 * side2;
  const perimeter: number = 2 * (side1 + side2);

  const [x, y] = sides`The area is: ${area}.\nThe perimeter is: ${perimeter}.`;
  console.log(x);
  console.log(y);
}
