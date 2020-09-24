let inputNum;
outer: while (true) {
    inputNum = prompt('Enter a positive integer:');
    if (!isNaN(inputNum) && !inputNum.includes(".")) {
        var realNum = parseFloat(inputNum);
        if(Number.isInteger(realNum) && realNum > 0) {
            break outer;
        }
    }
}
alert("You would like to order " + inputNum + " books");