// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// ******* PSUEDO CODE *******
// Create a function - fibonacci
// Input: number greater than 2
// Output: array length equal to input
    // numbers in array must follow Fibonacci sequence

    describe("fibonacci", () => {
        it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
          expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
          expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
        })
      })

// RED TEST:    ReferenceError: fibonacci is not defined


// b) Create the function that makes the test pass.


// FIRST ATTEMPT: Could not figure out how the math needed to work in order to add in the appropriate sequence. This block of code only yielded an empty array.

// fibonacci = (input) => {
//     let arrayLength = input
//     let newArray = []
//    for (let i = 1; i <= arrayLength; i++){
//        newArray.push(input[i] + input[i - 1])
//     }
//     return newArray
// }


// SECOND ATTEMPT AFTER RESEARCH:
// The math needed to indicate that after the first addition, the values for the variables would need to change in order to continue addition in sequence (i.e. num1 changes to num2, num2 changes to next, then num1+num2)
// Changing to the while loop rather than a for loop enabled having a more precise conditional as it relates to the input which determines the length of the output.

fibonacci = (arrayLength) => {
    let num1 = 1
    let num2 = 1
    let newArray = [num1, num2]
    while (newArray.length < arrayLength && arrayLength > 2){
        nextNum = num1 + num2
        newArray.push(nextNum)
        num1 = num2
        num2 = nextNum
    }
    return newArray
}

// GREEN TEST :   PASS  week-3-assessment-NTR-TheMekaVerse/code-challenges.test.js
// Test Suites: 1 failed, 1 passed, 2 total <--- This is still reading a test suite from week-2 assessment
// Tests:       1 passed, 1 total



// REFACTOR: I'm not sure if there's a way to refactor considering the number of variables that have to be established and/or change value throughout the loop. 




// -------------------------------------------------------






// 2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.


// a) Create a test with expect statements for each of the variables provided.

// ******* PSUEDO CODE *******
// Create a function - onlyOddNums
// Input: array of mixed data types
      // .filter
      // .sort
// Output: only number data types & in numerical order

describe("onlyOddNums", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        expect(onlyOddNums(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOddNums(fullArr2)).toEqual([-823, 7, 23])
    })
})

// RED TEST:      ReferenceError: onlyOddNums is not defined



// b) Create the function that makes the test pass.

// Values in filtered array should meet both the criteria of number data type and odd


onlyOddNums = (array) => {
    let filterNums = array.filter(arrays => typeof arrays === "number" && arrays % 2 !== 0) 
        return filterNums.sort(function(a, b){return a-b})
}


// GREEN TEST:   PASS  week-3-assessment-NTR-TheMekaVerse/code-challenges.test.js
// Test Suites: 1 failed, 1 passed, 2 total  <--- This is still reading a test suite from week-2 assessment
// Tests:       1 passed, 1 total

// I'm really proud of this solution. It came to me fairly quickly and without much help from resources other than what I could recall having used in previous challenges/assessments. It doesn't get easier, but I'm getting better :)



// REFACTOR: Combine all code onto a single line

onlyOddNums = (array) => {
    return filterNums = array.filter(arrays => typeof arrays === "number" && arrays % 2 !== 0).sort(function(a, b){return a-b}) 
}






// -------------------------------------------------------





// 3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// ******* PSUEDO CODE *******
// Create a function - calcArray
// Input: array of numbers
// Output: array the same length as the input and containing an accumulating sum
    // Note: an empty string should return an empty string


describe("calcArray", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        expect(calcArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(calcArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(calcArray(numbersToAdd3)).toEqual([])

    })
})

// RED TEST:    ReferenceError: calcArray is not defined



// b) Create the function that makes the test pass.


// iterate through each element (i)
// add current element value to previous element value (i + (i -1))


// I believe this solution has the correct math, however it's only returning a single number (total of the first and second numbers in the array).

// calcArray = (input) => {
//    for (let i = 1; i <= input.length; i++){
//         return input[i] + input[i - 1]
//     }
// }


// Update to first solution

calcArray = (input) => {
    for (let i = 1; i < input.length; i++){
         input[i] = input[i] + input[i - 1]
    }
    return input
}

// GREEN TEST:    PASS  week-3-assessment-NTR-TheMekaVerse/code-challenges.test.js
// Test Suites: 1 failed, 1 passed, 2 total  <--- This is still reading a test suite from week-2 assessment
// Tests:       1 passed, 1 total


// REFACTOR: Rather than use a for loop, use the built in method .forEach()

// Having trouble figuring out the appropriate syntax to include the formula that yields the desired result

calcArray = (input) => {
    let accumulatedSums = input.forEach((input[i]) => inputs[i] + inputs[i - 1])
    return accumulatedSums
}