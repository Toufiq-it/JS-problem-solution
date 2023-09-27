// Question 
// file:///C:/projects/javascript%20mileston/Assignment-4/assignment-4_requirements.pdf

// Problem 1 

function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Please ! Input Number";
    }
    else if (number < 0) {
        return "Please ! Input Positive Number";
    }
    else if (number >= 1) {
        return number * number * number;
    }
}
const result = cubeNumber(4);
// console.log('The Number Cube :', result);

// Problem 2

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please enter the string in two places";
    } else {
        if (string1.includes(string2) === true) {
            return true;
        } else {
            return false;
        }
    }
}
const match = matchFinder('John Doe', 'ohn');
// console.log('Match : ', match);

// Problem 3

function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return "Please Provide me an array";
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[0] < 0 || arr[1] < 0) {
                return "Invalid Input";
            } else {
                if (arr[0] === arr[1]) {
                    return "equal";
                } else {
                    arr.sort((a, b) => b - a);
                    return arr;
                }
            }
        }
    }
}
const arr = [2, 4];
const checkInput = sortMaker(arr);
// console.log(checkInput);

// Problem 4

function findAddress(obj) {
    if (typeof obj !== 'object') {
        return "Please Provide me a valid object";
    } else {
        const street = obj.street || '___';
        const house = obj.house || '___';
        const society = obj.society || '___';

        return street + ',' + house + ',' + society;
    }
}
const obj = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}
const checkObject = findAddress(obj);
// console.log(checkObject);

// Problem 5

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || typeof totalDue !== 'number') {
        return "Please provide valid inputs";
    } else {
        if (changeArray.length === 0) {
            return "Please enter the number of an array";
        }
        else {
            let totalTaka = 0;
            for (const taka of changeArray) {
                totalTaka = totalTaka + taka;
            }
            if (totalTaka >= totalDue) {
                return true;
            } else if (totalTaka < totalDue) {
                return false;
            }
        }
    }
}
const checkCanPay = canPay([1, 2, 5], 10);
// console.log(checkCanPay);

