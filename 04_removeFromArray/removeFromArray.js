const removeFromArray = function(array) {
    newArray = [];
    removalArray = Array.from(arguments).slice(1);

    outer:
    for (item of array){
        for (itemToRemove of removalArray) {
            if (item === itemToRemove) continue outer;
        }
        newArray.push(item);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
