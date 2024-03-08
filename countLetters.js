const assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}` );
    } else {
        console.log( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`) ;
    }
};

const countLetters = function(allLetters) {
    const results = {};
for (const char of allLetters){
    
    results[char] = (results[char]|| 0) +1;

}
return results;
};

const result = countLetters("lighthouse in the house");
console.log(result);
