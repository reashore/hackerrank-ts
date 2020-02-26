function reverseString(s: string): void {
  let array;
  let reversedArray;
  let reversed = s;

  try {
    array = s.split("");
    console.log(array);
    reversedArray = array.reverse();
    reversed = reversedArray.join("");
  } catch (e) {
    console.log(e.message);
  }

  console.log(reversed);
}

export default function solveProblem2(): void {
  const s = "1234";
  reverseString(s);
}
