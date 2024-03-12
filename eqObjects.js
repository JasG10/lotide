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

const assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}` );
    } else {
        console.log( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`) ;
    }
};

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "pink"], size: "medium" };
const anotherMultiColorShirtObject = { size: "large", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), false);

