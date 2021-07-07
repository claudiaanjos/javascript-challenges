// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.




const uniqueInOrder = function (iterable) {
    const newIterable = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) { newIterable.push(iterable[i]) }
    }
    return newIterable
}

console.log(uniqueInOrder([1, 2, 2, 3, 3]))





// Others resolutions

// 01

function uniqueInOrder(it) {
    var result = []
    var last

    for (var i = 0; i < it.length; i++) {
        if (it[i] !== last) {
            result.push(last = it[i])
        }
    }

    return result
}

// 02

var uniqueInOrder = function (iterable) {
    return [...iterable].filter((a, i) => a !== iterable[i - 1])
}

// 03

const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])

// 04

var uniqueInOrder = function (iterable) {
    return [...iterable].reduce((l, r) => l.slice(-1)[0] == r ? l : l.concat(r), []);
}