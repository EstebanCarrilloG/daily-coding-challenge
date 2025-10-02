import * as challenge from "./challenges/index.js";
import * as input from "./data/index.js";
import { styleText } from "./utils/styleText.js";

// August 2025
console.log(styleText("Callenges: August 2025", "heading"));

// 11-08-2025 - Vowel balance.
console.log(styleText("11-08-2025 - Vowel Balance"), {
  testCase: input.vowelBalance,
  output: challenge.isBalanced(input.vowelBalance),
});
// 13-08-2025 - Fibonacci sequence.
console.log(styleText("13-08-2025 - Fibonacci sequence"), {
  testCase: input.fibonacciSequence,
  output: challenge.fibonacciSequence(
    input.fibonacciSequence.startSequence,
    input.fibonacciSequence.length
  ),
});
// 14-08-2025 - S P A C E J A M.
console.log(styleText("14-08-2025 - S P A C E J A M"), {
  testCase: input.spaceJam,
  output: challenge.spaceJam(input.spaceJam),
});
// 15-08-2025 - Jumble the words.
console.log(styleText("15-08-2025 - Jumble the words"), {
  testCase: input.jbelmu,
  output: challenge.jbelmu(input.jbelmu),
});
// 16-08-2025 - Anagram Checker.
console.log(styleText("16-08-2025 - Anagram Checker"), {
  testCase: input.areAnagrams,
  output: challenge.areAnagrams(
    input.areAnagrams.word1,
    input.areAnagrams.word2
  ),
});
// 17-08-2025 - Find target.
console.log(styleText("17-08-2025 - Find target"), {
  testCase: input.findTarget,
  output: challenge.findTarget(input.findTarget.arr, input.findTarget.target),
});
// 18-08-2025 - Factorializer.
console.log(styleText("18-08-2025 - Factorializer"), {
  testCase: input.factorial,
  output: challenge.factorial(input.factorial),
});
// 19-08-2025 - Sum of Squares
console.log(styleText("19-08-2025 - Sum of Squaress"), {
  testCase: input.sumOfSquares,
  output: challenge.sumOfSquares(input.sumOfSquares),
});
// 20-08-2025 - Squares with 3.
console.log(styleText("20-08-2025 - Squares with 3"), {
  testCase: input.squaresWithThree,
  output: challenge.squaresWithThree(input.squaresWithThree),
});
// 21-08-2025 - Mile Pace.
console.log(styleText("21-08-2025 - Mile Pace"), {
  testCase: input.milePace,
  output: challenge.milePace(input.milePace.minutes, input.milePace.time),
});
// 22-08-2025 - Message Decoder.
console.log(styleText("22-08-2025 - Message Decoder"), {
  testCase: input.decode,
  output: challenge.decode(input.decode, 4),
});
// 23-08-2025 - Unnatural prime.
console.log(styleText("23-08-2025 - Unnatural prime"), {
  testCase: input.isUnnaturalPrime,
  output: challenge.isUnnaturalPrime(input.isUnnaturalPrime),
});
// 24-08-2025 - Character Battle
console.log(styleText("24-08-2025 - Character Battle"), {
  testCase: input.battle,
  output: challenge.battle(input.battle.myArmy, input.battle.opposingArmy),
});

// ------------------------------------------------------------------------------------------

// September 2025
console.log(styleText("Callenges: September 2025", "heading"));

// 09-09-2025 - Unique characters.
console.log(styleText("09-09-2025 - Unique characters"), {
  testCase: input.allUnique,
  output: challenge.allUnique(input.allUnique),
});
// 18-09-2025 - Fill The Tank.
console.log(styleText("18-09-2025 - Fill The Tank"), {
  testCase: input.costToFill,
  output: challenge.costToFill(
    input.costToFill.gallons,
    input.costToFill.cost,
    input.costToFill.price
  ),
});
// 19-09-2025 - Photo Storage.
console.log(styleText("19-09-2025 - Photo Storage"), {
  testCase: input.numberOfPhotos,
  output: challenge.numberOfPhotos(
    input.numberOfPhotos.cost,
    input.numberOfPhotos.size
  ),
});
// 24-09-2025 - Perfect square.
console.log(styleText("24-09-2025 - Perfect square"), {
  testCase: input.isPerfectSquare,
  output: challenge.isPerfectSquare(input.isPerfectSquare),
});
// 25-09-2025 - 2nd Largest.
console.log(styleText("25-09-2025 - 2nd Largest"), {
  testCase: input.secondLargest,
  output: challenge.secondLargest(input.secondLargest),
});
// 26-09-2025 - Caught Speeding.
console.log(styleText("26-09-2025 - Caught Speeding"), {
  testCase: input.speeding,
  output: challenge.speeding(input.speeding, 60),
});
// 27-09-2025 - Spam Detector.
console.log(styleText("27-09-2025 - Spam Detector"), {
  testCase: input.isSpam,
  output: challenge.isSpam(input.isSpam),
});
// 28-09-2025 - CSV Header Parser.
console.log(styleText("28-09-2025 - CSV Header Parser"), {
  testCase: input.getHeadings,
  output: challenge.getHeadings(input.getHeadings),
});
// 29-09-2025 - Longest Word.
console.log(styleText("29-09-2025 - Longest Word"), {
  testCase: input.getLongestWord,
  output: challenge.getLongestWord(input.getLongestWord),
});
// 30-09-2025 - Phone Number Formatter.
console.log(styleText("30-09-2025 - Phone Number Formatter"), {
  testCase: input.formatNumber,
  output: challenge.formatNumber(input.formatNumber),
});

//------------------------------------------------------------------------------------------
// October 2025
console.log(styleText("Callenges: October 2025", "heading"));
// 01-10-2025 - Binary to Decimal
console.log(styleText("01-10-2025 - Binary to Decimal"), {
  testCase: input.toDecimal,
  output: challenge.toDecimal(input.toDecimal),
});
//02-10-2025
console.log(styleText("02-10-2025 - Decimal to Binary"), {
  testCase: input.toBinary,
  output: challenge.toBinary(input.toBinary),
});
