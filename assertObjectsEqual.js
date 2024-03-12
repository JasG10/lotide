const eqObjects = function(object1, object2) {
    

    if (Object.keys(object1) .length !== Object.keys(object2).length) {
        return false;
    }

    for (const key in object1) {
        const value1 = object1[key];
        const value2 = object2[key];

        if (Array.isArray(value1) && Array.isArray(value2)) {

            if (!eqArrays(value1, value2)) {
                return false;
            }
        } else {
            if (value1 !== value2) {
                return false;
            }
        }
    }
    return true;
};

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    console.log(`Example label: ${inspect(actual)}`);
    if (eqObjects(actual, expected)){
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}` );
    } else {
        console.log( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`) ;
    }
};

assertObjectsEqual([1, 2, 3], [1, 2, 3]); // => true
assertObjectsEqual([1, 2, 3], [3, 2, 1]); // => false
  