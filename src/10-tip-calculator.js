/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (billAmount <= 0) return null;
  const object = {
    tipPercentage: 0,
    tipAmount: 0,
    totalAmount: 0,
  };
  switch (serviceRating) {
    case 1:
      object.tipPercentage = 5;
      object.tipAmount = Math.round(0.05 * billAmount * 100) / 100;
      object.totalAmount =
        Math.round((billAmount + object.tipAmount) * 100) / 100;
      return object;
    case 2:
      object.tipPercentage = 10;
      object.tipAmount = Math.round(0.1 * billAmount * 100) / 100;
      object.totalAmount =
        Math.round((billAmount + object.tipAmount) * 100) / 100;
      return object;

    case 3:
      object.tipPercentage = 15;
      object.tipAmount = Math.round(0.15 * billAmount * 100) / 100;
      object.totalAmount =
        Math.round((billAmount + object.tipAmount) * 100) / 100;
      return object;
    case 4:
      object.tipPercentage = 20;
      object.tipAmount = Math.round(0.2 * billAmount * 100) / 100;
      object.totalAmount =
        Math.round((billAmount + object.tipAmount) * 100) / 100;
      return object;
    case 5:
      object.tipPercentage = 25;
      object.tipAmount = Math.round(0.25 * billAmount * 100) / 100;
      object.totalAmount =
        Math.round((billAmount + object.tipAmount) * 100) / 100;
      return object;
    default:
      return null;
  }
}
