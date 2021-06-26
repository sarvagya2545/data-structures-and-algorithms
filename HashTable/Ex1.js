// given an array, return the first repeating character

let arr = [1,2,3,4,5,1];

function firstRepeatingCharIndex(arr) {
    let prevValues = {};

    for(let i = 0; i < arr.length; i++) {
        if(prevValues[arr[i]] !== undefined) 
            return prevValues[arr[i]];
        prevValues[arr[i]] = i;
    }

    return null;
}

console.log(firstRepeatingCharIndex(arr));