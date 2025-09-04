/**
 * Adds two numbers together.
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of a and b.
 */
export function addition(a: number, b: number): number {
  return a + b;
}

if (require.main === module) {
  console.log("Hello depuis TypeScript 👋");
  console.log("2 + 3 =", addition(2, 3));
}
