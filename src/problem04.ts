function getLetter(s: string): string {
  const firstCharacter = s[0];
  let result;

  switch (firstCharacter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      result = "A";
      break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      result = "B";
      break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      result = "C";
      break;

    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
      result = "D";
      break;

    default:
      result = "X";
      break;
  }

  return result;
}

export default function solveProblem04(): void {
  const input = "adfgt";
  const grade = getLetter(input);
  console.log(grade);
}
