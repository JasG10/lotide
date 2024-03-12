const assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}` );
    } else {
        console.log( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`) ;
    }
};

const findKey = function(object, callback) {
    for (const key in object) {
        if (object.hasOwnProperty(key) && callback(object[key])) {
            return key;
        }
    }
    return undefined;
};

const exampleKey = {
    first: { value: 15 },
    second: { value: 10 },
    third: { value: 2 }
};

const result = findKey(exampleKey, obj => obj.value === 10);
assertEqual(result, 'second'); // This should pass

const resultNotFound = findKey(exampleKey, obj => obj.value === 20);
assertEqual(resultNotFound, undefined); // This should pass