const assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}` );
    } else {
        console.log( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`) ;
    }
};

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

const findKeyByValue = (obj, value) => {
    const keys = Object.keys(obj);

    for (let key of keys) {
        if(obj.hasOwnProperty(key) && obj[key] === value){
            return key;
        }
    }
    return undefined; 
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);