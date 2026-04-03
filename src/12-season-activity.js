/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the Season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an Activity based on Season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { Season: string, Activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ Season: string, Activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  if (month <= 0 || month > 12) return null;
  let Season;
  let Activity;

  if (month === 12 || month === 1 || month === 2) Season = "Winter";
  else if (month === 3 || month === 4 || month === 5) Season = "Spring";
  else if (month === 6 || month === 7 || month === 8) Season = "Summer";
  else Season = "Autumn";

  if (Season === "Winter" && temperature < 0) Activity = "skiing";
  if (Season === "Winter" && temperature >= 0) Activity = "ice skating";
  if (Season === "Spring" && temperature > 20) Activity = "hiking";
  if (Season === "Spring" && temperature <= 20) Activity = "museum visit";
  if (Season === "Summer" && temperature > 35) Activity = "swimming";
  if (Season === "Summer" && temperature <= 35) Activity = "cycling";
  if (Season === "Autumn" && temperature > 15) Activity = "nature walk";
  if (Season === "Autumn" && temperature <= 15) Activity = "reading at a cafe";

  return { season: Season, activity: Activity };
}
