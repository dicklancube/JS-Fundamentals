// Function to compute the factorial recursively
function factorial(n) {
  // Handle the NaN case (Factorial of NaN is 1)
  if (isNaN(n)) {
    return 1;
  }

  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) {
    return 1;
  }

  // Recursive case: factorial of n is n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Get the argument from the command line
const num = parseInt(process.argv[2]);

// Print the result of the factorial calculation
console.log(factorial(num));
