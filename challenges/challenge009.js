/* Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial). */

function factorial (n) {
    if (n === 0 || n == 1) {
        console.log(1)
    }
    else if (n > 0) {
        let j = 1
        for (let i = 1; i <= n; i++) {
            j = j*i
        }
        console.log(j)
    } 
}

factorial(4)