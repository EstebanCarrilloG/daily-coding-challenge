import * as challenge from "./challenges/index.js";

// August 2025
console.log("\x1b[32m* Callenges: August 2025\x1b[0m");
console.log("- Vowel Balance:", challenge.isBalanced("123A#b!E&*456-o.U")); // 11-08-2025 - Vowel balance.
console.log("- Fibonacci sequence:", challenge.fibonacciSequence([21, 32], 10)); // 13-08-2025 - Fibonacci sequence.
console.log(
  "- S P A C E J A M:",
  challenge.spaceJam("   free   Code   Camp   ")
); // 14-08-2025 - S P A C E J A M.
console.log(
  "- Jumble the words:",
  challenge.jbelmu("hello world wellcome to Ecuador")
); // 15-08-2025 - Jumble the words.
console.log("- Anagram Checker:", challenge.areAnagrams("listen", "silent")); // 16-08-2025 - Anagram Checker.
console.log("- Targeted Sum:", challenge.findTarget([2, 7, 11, 15], 9)); // 17-08-2025 - Find target.
console.log("- Factorializer:", challenge.factorial(1));
console.log("- Sum of Squares", challenge.sumOfSquares(5));
console.log("- Squares with 3:", challenge.squaresWithThree(100)); // 20-08-2025 - Squares with 3.

// September 2025
console.log("\x1b[32m* Callenges: September 2025\x1b[0m");
console.log("- Unique characters:", challenge.allUnique("hola")); // 09-09-2025 - Unique characters.
console.log("- Cost to fill the tank:", challenge.costToFill(20, 0, 4.0)); // 18-09-2025 - Fill the tank.
console.log("- Number of photos:", challenge.numberOfPhotos(3.5, 750)); // 19-09-2025 - Number of photos.
console.log("- Is perfect square:", challenge.isPerfectSquare(9)); // 24-09-2025 - Perfect square.
console.log(
  "- Second largest number:",
  challenge.secondLargest([1, 2, 3, 4, 4, 4])
); // 25-09-2025 - Second largest number.
console.log("- Caught Speeding:", challenge.speeding([58, 50, 60, 55], 60)); // 26-09-2025 - Caught Speeding.
console.log("- Is spam:", challenge.isSpam("+0 (200) 111-1182")); // 27-09-2025 - Is spam.
console.log(
  "- CSV Header Parser:",
  challenge.getHeadings("username , email , signup date ")
); // 28-09-2025 - CSV Header Parser.
