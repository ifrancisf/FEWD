function sumOfOddIntegers(N) {
    // Initialize the sum variable
    let sum = 0;
    
    // Loop to calculate the sum of the first N odd integers
    for (let i = 0; i < N; i++) {
        // Calculate the odd integer using the formula 2 * i + 1
        let oddInteger = 2 * i + 1;
        // Add the odd integer to the sum
        sum += oddInteger;
    }
    
    // Display the result
    console.log(`The sum of the first ${N} odd integers is: ${sum}`);
}

// Example usage:
sumOfOddIntegers(4); // Output: The sum of the first 4 odd integers is: 16
