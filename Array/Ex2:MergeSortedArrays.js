console.log(
    mergeSortedArrays([], [4,6,30])
)

function mergeSortedArrays(arr1, arr2) {
    // Makes solution O(1) instead of O(n) in case of 1 array being empty
    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1;

    let arr3 = [];
    let i = 0,j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            arr3.push(arr1[i]);
            i++;
        } else {
            arr3.push(arr2[j]);
            j++;
        }
    }

    while(j < arr2.length) {
        arr3.push(arr2[j]);
        j++;
    }

    while(i < arr1.length) {
        arr3.push(arr1[i]);
        i++;
    }

    return arr3;
}