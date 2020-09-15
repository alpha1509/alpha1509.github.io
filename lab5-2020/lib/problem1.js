let arrayPrime = [];
let inputNum;
outer: while (true) {
    inputNum = prompt('Enter Positive Integer');
    if (!isNaN(inputNum) && !inputNum.includes(".")) {
        var realNum = parseFloat(inputNum);
        if(Number.isInteger(realNum) && realNum > 0) {
            let i = 2;
            for (i = 2; i <= realNum; i++) {
                let isPrime = true;
                for (j = 2; j < i; j++ ) {
                    if (i % j == 0) {
                        isPrime = false;
                        break
                    }
                }
                if (isPrime){
                    arrayPrime.push(i);
                }
            }
            break outer;
        }
    }
}
alert("For n = " + realNum + ", prime number are\n" + arrayPrime);