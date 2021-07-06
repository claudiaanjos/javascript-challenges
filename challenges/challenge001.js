// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = function (iterable) {
    const newIterable = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) { newIterable.push(iterable[i]) }
    }
    return newIterable
}

console.log(uniqueInOrder([1, 2, 2, 3, 3]))