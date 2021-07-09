// Task

// Complete the function in the editor below by returning a RegExp object, re , that matches any string s that begins and ends with the same vowel.Recall that the English vowels are a, e, i, o, and u.

function regexVar(s) {
    let vowel = 'aeiou'
    let re;

    if (vowel.includes(s[0]) && vowel.includes(s[s.length - 1]) && s[0] === s[s.length - 1]) {
        re = true
    } else {
        re = false
    }
    return re;
}

// Another resolution with RegExp

function regexVar () {
    var re = RegExp(/^([aeiou]).*\1$/);
    return re
}


