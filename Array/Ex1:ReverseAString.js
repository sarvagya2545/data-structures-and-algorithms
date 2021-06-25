
// 'abcd'
// 'dcba'

// I learnt: Strings are immutable in javascript!

/*

    Time complexity of split => 
        O(string.length) when delimiter is '',
        O(string.length * delimiter.length) when delimiter is something like 'abcd'

*/


// create a function which reverses a string
function reverse(str) {
    const strArr = str.split('');

    let i = 0, j = strArr.length - 1;
    let temp;
    while(i <= j) {
        temp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = temp;

        i++;
        j--;
    }

    return strArr.join('');
}

const reverse2 = str => str.split('').reverse().join('');

console.log(reverse2('Sarvagya'));