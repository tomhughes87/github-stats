const arr = [1,2,2,2,3,3,3,4]
const target = 6

function FirstAndLast(arr, target) {
    return (` ${arr.indexOf(target)}  ${arr.lastIndexOf(target)}`)
}

console.log(FirstAndLast(arr, target))

