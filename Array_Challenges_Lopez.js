// Always Hungry Write a function that is given an array and each time the value is "food" it should//

function alwaysHungry(arr) {
    var hungryCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            hungryCount++;
        }
    }
    if (hungryCount == 0) {
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

//Given an array and a value cutoff, return a new array containing only the values larger than cutoff.//

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// Given an array of numbers return a count of how many of the numbers are larger than the average.//

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > sum / arr.length) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// Write a function that will reverse the values an array and return them.//

function reverse(arr) {
    arr.reverse();
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

function fibonacciArray(n) {
    var fibArr = [0, 1];
    while (fibArr.length != n){
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);
