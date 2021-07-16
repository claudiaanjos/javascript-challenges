/* Declare a constant variable, PI, and assign it the value Math.PI.You will not pass this challenge unless the variable is declared as a constant and named PI(uppercase).
Read a number, r , denoting the radius of a circle from stdin.
Use PI and r to calculate the area and perimeter of a circle having radius r.
Print area as the first line of output and print perimeter as the second line of output. */

function main(r) {
    const PI = Math.PI
    console.log(PI * (Math.pow(r,2)))
    console.log(2*PI*r)
}

main(2.6)