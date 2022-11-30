const arr = [1,2,3,4,6,7,8,10,9,5,5,5,5]
const k = 6 // find the k(th) largest element in the array

function FindTheKthLargest() {
    const sortedAndRemoveDoubles = new Set(arr.sort(function(a, b){return b-a}));
    return [...sortedAndRemoveDoubles][k-1]   
}

console.log(FindTheKthLargest())

// https://www.freecodecamp.org/news/10-common-coding-interview-problems-solved/