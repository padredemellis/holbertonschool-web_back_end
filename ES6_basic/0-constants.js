/**
 * ES6 Basics - Task 0
 *
 * This file demonstrates the use of `const` and `let` for variable declaration.
 *
 * @author Emanuel Romero
 * @version 1.0.0
 */

/**
 * Returns a constant string value.
 *
 * @returns {string} The string "I prefer const when I can."
 */
export function taskFirst() {
    var task;
    const task = 'I prefer const when I can.';
    return task;
}

/**
 * Returns a fixed string value.
 *
 * @returns {string} The string " is okay"
 */
export function getLast() {
  return ' is okay';
}

/**
 * Returns a combination of a string and the result of another function.
 * This function uses `let` to show that the variable's value can be reassigned.
 *
 * @returns {string} The combined string "But sometimes let is okay".
 */
export function taskNext() {
    var combination;
    let combination = 'But sometimes let';
    combination += getLast();

  return combination;
}
