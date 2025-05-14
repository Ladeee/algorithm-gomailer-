// Given two sorted arrays nums1 and nums2 of size m and n
// respectively, return the median of the two sorted arrays.

function median(listOne, listTwo) {
    let concatenation = listOne.concat(listTwo);
    const medianCalc = () => {
        let result = 0
        for (let i = 0; i < concatenation.length; i++) {
            result += concatenation[i]
        }
        let division = result / concatenation.length
        return division;
    }
    return medianCalc()
}

let listOne = [1, 2, 3]
let listTwo = [4, 5, 6]

let listOne2 = [3, 4, 3]
let listTwo2 = [7, 6, 7]

console.log(median(listOne, listTwo))
console.log(median(listOne2, listTwo2))



function random(randomNumbers) {
    randomNumbers.sort((a, b) => a - b)
    let biggest = randomNumbers[randomNumbers.length - 1]
    console.log("The sorted numbers are: ", randomNumbers, "The biggest number is: ", biggest)
}

return random([2, 4, 5, 7, 9, 1, 3, 6, 10])