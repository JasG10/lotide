
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

module.exports = eqArrays;







