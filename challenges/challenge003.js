// Task

// Variables named firstInteger, firstDecimal, and firstString are declared for you in the editor below. You must use the  operator to perform the following sequence of operations:

// Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the result on a new line using console.log.
// Convert secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and print the result on a new line using console.log.
// Print the concatenation of firstString and secondString on a new line using console.log. Note that  firstString must be printed first.

// When we sum the integers  and, we get the integer.
// When we sum the floating - point numbers  and, we get.When we concatenate HackerRank with is the best place to learn and practice coding!, we get HackerRank is the best place to learn and practice coding!.

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    let sumInteger = Number(secondInteger) + firstInteger
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    let sumDecimal = parseFloat(secondDecimal) + firstDecimal
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    let string = firstString + secondString
    return `${sumInteger}\n${sumDecimal}\n${string}`
}

console.log(performOperation(12, 4.32, "is the best place to learn and practice coding!"))

