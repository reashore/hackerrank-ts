function getMaxBitwiseAnd(n: number, k: number): number {
  let maxAnd: number = 0;

  for (let n1 = 0; n1 < n; n1++) {
    for (let n2 = 0; n2 < n; n2++) {
      const condition: boolean = n1 < n2;

      if (!condition) {
        continue;
      }

      // tslint:disable-next-line: no-bitwise
      const and: number = n1 & n2;

      const lessThanLimit: boolean = and < k;

      if (!lessThanLimit) {
        continue;
      }

      if (and > maxAnd) {
        maxAnd = and;
      }
    }
  }

  return maxAnd;
}

export default function solveProblem11(): void {
  let n: number = 5;
  let k: number = 2;
  let max: number = getMaxBitwiseAnd(n, k);
  console.log(n);
  console.log(k);
  console.log(max);
  console.log();

  n = 8;
  k = 5;
  max = getMaxBitwiseAnd(n, k);
  console.log(n);
  console.log(k);
  console.log(max);
  console.log();

  n = 2;
  k = 2;
  max = getMaxBitwiseAnd(n, k);
  console.log(n);
  console.log(k);
  console.log(max);
  console.log();

  n = 9;
  k = 2;
  max = getMaxBitwiseAnd(n, k);
  console.log(n);
  console.log(k);
  console.log(max);
  console.log();

  n = 8;
  k = 3;
  max = getMaxBitwiseAnd(n, k);
  console.log(n);
  console.log(k);
  console.log(max);
  console.log();
}
