const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)){
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}` );
    } else {
        console.log( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`) ;
    }
};

const eqArrays = function (ar1, ar2) {
    if (ar1.length !== ar2.length){
        return false;
    }
    for (let i = 0; i < ar1.length; i++){
        if (ar1[i] !== ar2[i]){
            return false;
        }
    }
    return true;
};

const middle = function(array) {
    const length = array.length;

    // empty array
    if (length <= 2){
        return [];
    }

    //odd number of elements
    if (length % 2 === 1){
        const middleIndex = Math.floor(length / 2);
        return [array[middleIndex]];
    }

    //even number of elements
    const middleIndex1 = length / 2 - 1;
    return [array[middleIndex1]];

  };

console.log(middle([1]));             // => []
console.log(middle([1, 2]));          // => []
console.log(middle([1, 2, 3]));       // => [2]
console.log(middle([1, 2, 3, 4, 5]));  // => [3]
console.log(middle([1, 2, 3, 4]));     // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]