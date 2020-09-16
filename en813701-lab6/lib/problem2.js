function isPosInteger (inputNum) {
    if (!isNaN(inputNum) && !inputNum.includes(".")) {
        var realNum = parseFloat(inputNum);
        if(Number.isInteger(realNum) && realNum > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isNegInteger (inputNum) {
    if (!isNaN(inputNum) && !inputNum.includes(".")) {
        var realNum = parseFloat(inputNum);
        if(Number.isInteger(realNum) && realNum < 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isNotEmptyArray(array) {
    if (array.length > 0) {
        return true;
    } else {
        return false;
    }
}

function readInput() {
    let numArray = [];
    while (true) {
        let inputNum = prompt('Enter an integer (a negative integer to quit)');
        if (isPosInteger(inputNum)) {
            n = parseInt(inputNum);
            numArray.push(n);
        } else if (isNegInteger(inputNum)) {
            break;
        }
    }
    return numArray;
}

function calAverageArrayNum(list) {
    let x = 0;
    for (i = 0; i < list.length; i++) {
        x = x + list[i];
    }
    return (x / list.length);
}

function displayStats(list) {
    if (isNotEmptyArray(list)) {
        let originalList = list.slice();
        list.sort(function(a, b){return a - b});
        let avg = calAverageArrayNum(list);
        let min = list[0];
        let max = list[list.length - 1];  
        return alert("For the list " + originalList + ", the average is " + avg + ", the minimum is " + min + ", and the maximum is " + max) //use <toFixed(n)> to fixed n decimal point
    } else {
        return alert("For the list that is empty, the average is 0, the minimum is 0, the maximum is 0")
    }
}

let list = readInput();
displayStats(list);
