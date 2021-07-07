// In a small town the population is p0 = 1000 at the beginning of a year.The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.How many years does the town need to see its population greater or equal to p = 1200 inhabitants ?

// More generally given parameters:
// p0, percent, aug(inhabitants coming or leaving each year), p(population to surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers(> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nb_year(p0, percent, aug, p) {
    let year = 0
    while (p0 < p) {
        let inhabitants = p0 + (p0 * (percent / 100)) + aug
        year++
        p0 = inhabitants
    }
    return year
}

console.log(nb_year(1500, 5, 100, 5000))
console.log(nb_year(1500000, 2.5, 10000, 2000000))

// Others Resolutions

// 01

function nbYear(p0, percent, aug, p) {
    for (var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
    return y;
}

// 02

function nbYear(p0, percent, aug, p, years = 0) {
    return p0 < p ? nbYear(p0 + p0 * percent / 100 + aug, percent, aug, p, years + 1) : years;
}