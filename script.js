// 1. Reverse a String
//Write a function reverseString(str) that takes a string as input and returns the string reversed.

function ReverseAStr(str){
    return str.split('').reverse().join('')
}
console.log(ReverseAStr('alpha'))

// function reverseString(str){
//     return  [...str].reverse()
// }
// console.log(reverseString('alpha'))


// function reverseString(str) {
//     return [...str].reverse().join('')
// }

// 2. Check for Palindrome
// Write a function isPalindrome(str) to check if a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(str){
    let reversedStr = [...str].reverse().join('')
    if(str == reversedStr) return true
    else return false
}
// console.log(isPalindrome('madam'))





// function isPalindrome(str) {
//     const reversedStr = [...str].reverse().join('')
//     if (str === reversedStr) return true
//     else return false
// }

//  3. Find the Largest Number in an Array
// Write a function findLargest(arr) that takes an array of numbers and returns the largest number.





// function largestOf(arr) {
//     return Math.max(...arr)
// }

// 4. FizzBuzz Problem
// Write a function that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".
function FizzBuzz() {
    for (let i = 1; i < 100; i++) {
        if (i % 15 == 0) console.log('FizzBuzz')
        if (i % 3 == 0) console.log('Fizz')
        if (i % 5 == 0) console.log('Buzz')
        else console.log(i)
    }
}
// FizzBuzz()
// 5. Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that takes an array and returns a new array with duplicates removed.

function removeDuplicates(arr) {
    return [... new Set(arr)]
}
// console.log(removeDuplicates([1,2,1,2,1,3]))

// 6. Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
    let vowels = 'aeiou'

    let vowelCount = 0
    for (let char of str.toLowerCase()) { // alpha => ['a','l','p','h','a']
        if (vowels.includes(char)) vowelCount++
    }
    return vowelCount
}
// console.log(countVowels('alpha'))

// 7. Find the Second Largest Number
// Write a function secondLargest(arr) that returns the second largest number in an array.

function secondLargest(arr) {
    const sortedArr = arr.sort((a, b) => b - a)
    return sortedArr[1]
}
// console.log(secondLargest([8,5,4,3,1,2]))

// check whether a num is prime or not 

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false
    }
    return true
}
// console.log(isPrime(2))

// write a function which merge the two arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]))

// Sum of Digits
// Ek function likhein jo kisi bhi number ke digits ka sum kare. Jaise agar input 123 hai, toh output 6 hona chahiye (1 + 2 + 3).
function sumOfDigits(digits) {
    return [...digits.toString()].reduce((acc, curVal) => acc + Number(curVal), 0)
}
// console.log(sumOfDigits(123456))

// Generate a Fibonacci Sequence
function fibonacci(num) {
    if(num <= 0) return []
    if(num == 1 ) return [0,1]
    let sequence = [0, 1]
    for (let i = 2; i < num; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1]
    }
    return sequence
}
// console.log(fibonacci(3))

// Check if a Year is a Leap Year
function isLeap(year) {
    if (year % 4 == 0) return true
    if (year % 100 == 0) return false
    if (year % 400 == 0) return true
    else return false
}
// console.log(isLeap(2024))

// Convert Celsius to Fahrenheit
// Ek function likhein jo temperature ko Celsius se Fahrenheit mein convert kare. Formula: F = (C × 9/5) + 32.

function celciousToFahrenheit(celsius) {
    return celsius * (9 / 5) + 5 + 32 + "F"
}
// console.log(celciousToFahrenheit(34))

// 
function countChars(str, char){
    let charCount = 0
    for(let i=0; i<=str.length; i++){
        if(str[i] == char) charCount++
    }
    return charCount
}
// console.log(countChars('alpha', 'l'))
// remove duplicates from a string

function remvDuplcts(str){
    return [  ...new Set(str)].join('')
}
// console.log(remvDuplcts('alpha'))
function isPrime(num){
    if (num = 0) return false 
    if (num = 1 ) return true
    for ( let i=2; i<num; i++){
        if (num % i == 0) return false
    }
    return true
    
}