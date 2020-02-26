function printVowelsThenConsonants(s: string): void {
  const consonants: string[] = [];

  for (const c of s) {
    if (isVowel(c)) {
      console.log(c);
    } else {
      consonants.push(c);
    }
  }

  for (const c of consonants) {
    console.log(c);
  }
}

function isVowel(c: string): boolean {
  const vowels: string = "aeiou";

  return vowels.includes(c);
}

export default function solveProblem1(): void {
  const input: string = "javascriptloops";

  printVowelsThenConsonants(input);
}
