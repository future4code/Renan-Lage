// 1a)

// const printNumbers = (n: number) => {
//  if (n >= 0) {
//   printNumbers(n - 1);
//   console.log(n);
//  }
// };

// printNumbers(5)

// b)

// const printNumbers = (n: number) => {
//  if (n >= 0) {
//   console.log(n);
//   printNumbers(n - 1);
//  }
// };

// printNumbers(5)

// 2

// const calculateSumTo = (n: number, acc: number = 0): number => {
//  if (n === 0) {
//   return acc;
//  }
//  return calculateSumTo(n - 1, acc + n);
// };

// console.log(calculateSumTo(3));
// console.log(calculateSumTo(10));
// console.log(calculateSumTo(100));

// 3

// const calculateSumTo = (n: number): number => {
//  var sum = 0
//  for (var i = 0; i <= n; i++) {
//   sum += i
//  }
//  return sum
// }


// console.log(calculateSumTo(3));
// console.log(calculateSumTo(10));
// console.log(calculateSumTo(100));

//  4

// const printArray = (arr: number[], i: number = arr.length - 1) => {
//  if (i >= 0) {
//   printArray(arr, i - 1)
//   console.log(arr[i])
//  }
// }

// printArray([1, 3, 4, 6, 2, 9])

// 5

// const getNumDigits = (num: number, acc: number = 1):number => {
//  if (num < 10) {
//   return acc
//  }
//  return getNumDigits(num / 10, acc + 1)
// }

// console.log(getNumDigits(0));
// console.log(getNumDigits(10));
// console.log(getNumDigits(2034));

// 6

// const getNumMax = (
//  arr: number[],
//  i: number = arr.length - 1,
//  acc: number = 0
// ): number => {
//  let accMax = acc

//  if (arr[i] > acc) {
//   accMax = arr[i]
//  }
//  if (i === 0) {
//   return accMax
//  }

//  return getNumMax(arr, i - 1, accMax)
// }

// console.log(getNumMax([2, 10, 8, 5, 4]));

// 7

export const findFirstCapitalLetter = (
 s: string,
 char: string = ""
): string => {
 if (char && char.toUpperCase() === char) {
   return char;
 }
 return findFirstCapitalLetter(s.substring(1), s[0]);
};

console.log(findFirstCapitalLetter("Renan"))