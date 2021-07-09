// Task

// First, print each vowel in s on a new line.The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
// Second, print each consonant(i.e., non - vowel) in s on a new line in the same order as it appeared in s.

function vowelsAndConsonants(s) {
    const vowels = 'aeiou'
    let consonants =''
    s = s.toLowerCase()
    for (let word of s) {
        if (vowels.includes(word)){
            console.log(word)
        } else {
            consonants = consonants + word + '\n'
        }
    }
    console.log(consonants.trim())
}

const test = vowelsAndConsonants("JavaScript")

console.log(test)


    


