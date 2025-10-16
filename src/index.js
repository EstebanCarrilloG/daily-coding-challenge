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
  output: challenge.milePace(input.milePace.miles, input.milePace.duration),
});
// 22-08-2025 - Message Decoder.
console.log(styleText("22-08-2025 - Message Decoder"), {
  testCase: input.decode.message,
  output: challenge.decode(input.decode.message, input.decode.shift),
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
//25-08-2025 - camelCase
console.log(styleText("25-08-2025 - camelCase"), {
  testCase: input.toCamelCase,
  output: challenge.toCamelCase(input.toCamelCase),
});
//27-08-2025 - Unorder of Operations
console.log(styleText("27-08-2025 - Unorder of Operations"), {
  testCase: input.evaluate,
  output: challenge.evaluate(input.evaluate.numbers, input.evaluate.operators),
});
//28-08-2025 - Second Best
console.log(styleText("28-08-2025 - Second Best"), {
  testCase: input.getLaptopCost,
  output: challenge.getLaptopCost(
    input.getLaptopCost.laptops,
    input.getLaptopCost.budget
  ),
});
//29-08-2025 - Candlelight
console.log(styleText("29-08-2025 - Candlelight"), {
  testCase: input.burnCandles,
  output: challenge.burnCandles(
    input.burnCandles.candles,
    input.burnCandles.leftoversNeeded
  ),
});
//30-08-2025 - Array Duplicates
console.log(styleText("30-08-2025 - Array Duplicates"), {
  testCase: input.findDuplicates,
  output: challenge.findDuplicates(input.findDuplicates),
});
//31-08-2025 - Hex Generator
console.log(styleText("31-08-2025 - Hex Generator"), {
  testCase: input.generateHex,
  output: challenge.generateHex(input.generateHex),
});
// ------------------------------------------------------------------------------------------

// September 2025
console.log(styleText("Callenges: September 2025", "heading"));

// 01-09-2025 - Tribonacci Sequence.
console.log(styleText("01-09-2025 - Tribonacci Sequence"), {
  testCase: input.tribonacciSequence,
  output: challenge.tribonacciSequence(
    input.tribonacciSequence.startSequence,
    input.tribonacciSequence.length
  ),
});
// 09-09-2025 - Unique characters.
console.log(styleText("09-09-2025 - Unique characters"), {
  testCase: input.allUnique,
  output: challenge.allUnique(input.allUnique),
});
// 18-09-2025 - Fill The Tank.
console.log(styleText("18-09-2025 - Fill The Tank"), {
  testCase: input.costToFill,
  output: challenge.costToFill(
    input.costToFill.tankSize,
    input.costToFill.fuelLevel,
    input.costToFill.pricePerGallon
  ),
});
// 19-09-2025 - Photo Storage.
console.log(styleText("19-09-2025 - Photo Storage"), {
  testCase: input.numberOfPhotos,
  output: challenge.numberOfPhotos(
    input.numberOfPhotos.photoSizeMb,
    input.numberOfPhotos.hardDriveSizeGb
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
  output: challenge.speeding(input.speeding.speeds, input.speeding.limit),
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
//03-10-2025 - P@ssw0rd Str3ngth!
console.log(styleText("03-10-2025 - P@ssw0rd Str3ngth!"), {
  testCase: input.checkStrength,
  output: challenge.checkStrength(input.checkStrength),
});
//04-10-2025 - Space Week Day 1: Stellar Classification
console.log(
  styleText("04-10-2025 - Space Week Day 1: Stellar Classification"),
  {
    testCase: input.classification,
    output: challenge.classification(input.classification),
  }
);
//05-10-2025 - Space Week Day 2: Exoplanet Search
console.log(styleText("05-10-2025 - Space Week Day 2: Exoplanet Search"), {
  testCase: input.hasExoplanet,
  output: challenge.hasExoplanet(input.hasExoplanet),
});
//06-10-2025 - Space Week Day 3: Phone Home
console.log(styleText("06-10-2025 - Space Week Day 3: Phone Home"), {
  testCase: input.sendMessage,
  output: challenge.sendMessage(input.sendMessage),
});
//07-10-2025 - Space Week Day 4: Landing Spot
console.log(styleText("07-10-2025 - Space Week Day 4: Landing Spot"), {
  testCase: input.findLandingSpot,
  output: challenge.findLandingSpot(input.findLandingSpot),
});
//08-10-2025 - Space Week Day 5: Goldilocks Zone
console.log(styleText("08-10-2025 - Space Week Day 5: Goldilocks Zone"), {
  testCase: input.goldilocksZone,
  output: challenge.goldilocksZone(input.goldilocksZone),
});
//09-10-2025 - Space Week Day 6: Moon Phase
console.log(styleText("09-10-2025 - Space Week Day 6: Moon Phase"), {
  testCase: input.moonPhase,
  output: challenge.moonPhase(input.moonPhase),
});
//10-10-2025 - Space Week Day 7: Space Week Day 7: Launch Fuel
console.log(styleText("10-10-2025 - Space Week Day 7: Launch Fuel"), {
  testCase: input.launchFuel,
  output: challenge.launchFuel(input.launchFuel),
});
//11-10-2025 - Hex to Decimal
console.log(styleText("11-10-2025 - Hex to Decimal"), {
  testCase: input.hexToDecimal,
  output: challenge.hexToDecimal(input.hexToDecimal),
});
//12-10-2025 - Battle of Words
console.log(styleText("12-10-2025 - Battle of Words"), {
  testCase: input.battle2,
  output: challenge.battle2(input.battle2.ourTeam, input.battle2.opponent),
});
//13-10-2025 - 24 to 12
console.log(styleText("13-10-2025 - 24 to 12"), {
  testCase: input.to12,
  output: challenge.to12(input.to12),
});
//14-10-2025 - String Count
console.log(styleText("14-10-2025 - String Count"), {
  testCase: input.count,
  output: challenge.count(input.count.text, input.count.pattern),
});
//15-10-2025 - HTML Tag Stripper
console.log(styleText("15-10-2025 - HTML Tag Stripper"), {
  testCase: input.stripTags,
  output: challenge.stripTags(input.stripTags),
});
//16-10-2025 - Email Validator
console.log(styleText("16-10-2025 - Email Validator"), {
  testCase: input.validate,
  output: challenge.validate(input.validate),
});
