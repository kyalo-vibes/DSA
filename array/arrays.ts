// Summary of methods: split, join, push, length, regex, concat, +=, includes

// Let and const with arrays
let sampleArray: number[] = [1,2,3] 
const anotherArray: number[] = [1,7]
sampleArray[0] = 9
anotherArray[0] = 2
sampleArray = [2,5]

console.log(sampleArray)
console.log(anotherArray)

// Array traversal
const names: string[] = ['Alice', 'Bob', 'Charlie']
for(let i = 0;i < names.length;i++) {
    console.log(names[i])
}
console.log(names[0].split(''))

const matrix: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let ans: number[] = []
let count: number = 0
for(let i = 0;i < matrix.length;i++){
    for(let j = 0;j < matrix.length;j++){
        ans[count] = matrix[i][j]
        count++
    }
}
console.log(ans)

// Two pointer
let arr: string[] = ['a','b','c','d','e','f','g']
let left:number = 0
let right:number = arr.length - 1
while (left < right) {
    [arr[left],arr[right]] = [arr[right],arr[left]]
    left += 1
    right -= 1
    // console.log(left)
}
console.log(arr)  

// Array methods
const charArray: string[] = ['K', 'y', 'a', 'l', 'o']
console.log("Join character array to string: ", charArray.join(''))
const strArray: string[] = ["My", "name", "is", "Kevin", "Kyalo"]
console.log("Join string array to sentence: ", strArray.join(' '))

// equivalent of append in python, adding string to a string, use += or concat
let firstBit: string = "Ke"
const secondBit: string = "vin"
firstBit += secondBit
// firstBit = firstBit.concat(secondBit)
console.log("Combine two strings: ", firstBit)

// includes method 
const vowels: string[] = ['a','e','i','o','u']
const randomValue: string = "random"
const randomCharArray: string[] = randomValue.split('')
for (const randomChar of randomCharArray) {
    console.log("Is character a vowel: ", randomChar, " - " , vowels.includes(randomChar))
}

// regex for alphanumeric
const regexValue: string = "random :,"
const regexCharArray: string[] = regexValue.split('')
for (const regexChar of regexCharArray) {
    console.log("Is character alphanumeric: ", regexChar, " = ", /^[a-zA-Z0-9]+/.test(regexChar))
}


