class Polygon{
    constructor(sides : number[]){
        this.sides = sides;
    }

    sides : number[];

    perimeter() : number {
        return this.sides.reduce((previousValue : number, currentValue : number) => currentValue += previousValue, 0);
    }
}

export default function solveProblem08(): void {
  const sides: number[] = [3, 4, 5];
  const polygon: Polygon = new Polygon(sides);

  console.log(polygon.perimeter());
}
