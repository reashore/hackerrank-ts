function modifyArray(array: number[]): number[] {
  return array.map(item => (item % 2 === 0 ? item * 2 : item * 3));
}

export default function solveProblem10(): void {
  const array: number[] = [1, 2, 3, 4, 5];
  const newArray : number[] = modifyArray(array);

  console.log(array);
  console.log(newArray);
}
