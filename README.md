# Uncommon JavaScript Error Handling

This repository demonstrates an example of uncommon error handling in JavaScript. The `foo` function explicitly checks for null values and throws an error for non-numeric inputs. While this is a valid and clear approach, it's less common than implicit type coercion or silent failures.

## Bug
The `bug.js` file contains the original function with explicit error handling.  This makes the function's behavior very clear but could be considered verbose by some developers.

## Solution
The `bugSolution.js` file offers no changes.  The original code is generally well-written and robust.  The uncommon aspect is the explicit error handling, which is a strength of the code.

## Lessons
- Explicit error handling improves code clarity and maintainability.
- While uncommon, choosing this approach can be more beneficial in certain contexts.