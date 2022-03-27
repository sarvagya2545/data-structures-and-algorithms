
// memoisation
function memoise(fn) {
    let cache = {};
    return function(input) {
        if(cache[input] !== undefined) return cache[input];
        cache[input] = fn(input);
        return cache[input];
    }
}

// tabulation
