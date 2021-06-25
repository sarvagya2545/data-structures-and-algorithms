console.log(
    mergeSortedArrays([0,3,4,31], [4,6,30])
)

function mergeSortedArrays(arr1, arr2) {
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