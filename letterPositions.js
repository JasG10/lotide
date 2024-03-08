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
}

const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here
    for (let i = 0; i < sentence.length; i ++){
        const char = sentence[i];
        if (results[char]) {
            results[char].push(i);
        } else {
            results[char] = [i];
        }
    }
    return results;
  };

assertArraysEqual(letterPositions("hello").e, [1]);