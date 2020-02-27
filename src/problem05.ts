function getSecondLargest(array : number[]) : number {
  let largest = Number.MIN_VALUE;
  let secondLargest = Number.MIN_VALUE;

    for (const num of array){
        if (num > largest){
            largest = num;
        }
    }

    for (const num of array){
        if (largest > num && num > secondLargest){
            secondLargest = num;
        }
    }

  return secondLargest;
}

export default function solveProblem05() {
  let array = [2, 3, 6, 6, 5];
  let secondLargest = getSecondLargest(array);
  console.log(secondLargest);

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  secondLargest = getSecondLargest(array);
  console.log(secondLargest);
}
