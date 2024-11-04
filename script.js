// 1. Reverse a String
//Write a function reverseString(str) that takes a string as input and returns the string reversed.

function reversedStr(str){
    return [...str].reverse().join('')
}

// 2. Check for Palindrome
// Write a function isPalindrome(str) to check if a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(str){
    const reversedStr = [...str].reverse().join('')
    if(str === reversedStr) return true
    else return false
}

//  3. Find the Largest Number in an Array
// Write a function findLargest(arr) that takes an array of numbers and returns the largest number.

function largestOf(arr){
    return Math.max(arr)
}

// 