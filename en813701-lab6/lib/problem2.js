function isInteger (inputNum) {
    return (!isNaN(inputNum) && !inputNum.includes(".") && Number.isInteger(parseInt(inputNum))) ? true: false;
}

function isNotEmptyArray(array) {
    return array.length > 0 ? true : false;
}

function readInput() {
    let numArray = [];
    while (true) {
        let inputNum = prompt('Enter an integer (a negative integer to quit)');
        if (isInteger(inputNum) && inputNum > 0) {
            n = parseInt(inputNum);
            numArray.push(n);
        } else if (isInteger(inputNum) && inputNum < 0) {
            break;
        }
    }
    return numArray;
}

function calcAverageNumArray(list) {
    let x = 0;
    for (i = 0; i < list.length; i++) {
        x = x + list[i];
    }
    return (x / list.length);
}

function calcMinArrayNum(list) {
    let toSortList = list.slice();
    toSortList.sort(function(a, b){return a - b});
    return toSortList[0];
}

function calcMaxArrayNum(list) {
    let toSortList = list.slice();
    toSortList.sort(function(a, b){return a - b});
    return toSortList[toSortList.length - 1];
}

function displayStats(list) {
    if (isNotEmptyArray(list)) {
        let avg = calcAverageNumArray(list);
        let min = calcMinArrayNum(list);
        let max = calcMaxArrayNum (list); 
        return alert("For the list " + list + ", the average is " 
                    + avg.toFixed(2) + ", the minimum is " + min + ", and the maximum is " + max)
    } else {
        return alert("For the list that is empty, the average is 0, the minimum is 0, the maximum is 0")
    }
}

let list = readInput();
displayStats(list);
