// Find first non-repeating integer in an array
function nonRepeatinInteger(arr) {
    let val = [], count = [];
    arr.forEach((item) => {
        if (!val.includes(item)) {
            val.push(item);
            count[val.indexOf(item)] = 1;
        } else {
            count[val.indexOf(item)]++;
        }
    });
    return val[count.indexOf(Math.min(...count))];
}
console.log(nonRepeatinInteger([-1, 2, -1, 3, 2]));
console.log(nonRepeatinInteger([9, 4, 9, 6, 7, 4]));

// 2. approach using hash O(N)
function nonRepeatinInteger_Hash(arr) {
    const data = arr.reduce((acc, val) => {
        if (!acc[val]) {
            acc[val] = 0;
        }
        acc[val]++;
        return acc;
    }, {});
    for (let i = 0; i < arr.length; i++) {
        if (data[arr[i]] === 1) {
            return arr[i];
        }
    }
}

console.log('Using Hash for [-1, 2, -1, 3, 2]: ', nonRepeatinInteger_Hash([-1, 2, -1, 3, 2]));
console.log('Using Hash for [9, 4, 9, 6, 7, 4]: ', nonRepeatinInteger_Hash([9, 4, 9, 6, 7, 4]));

// 3. approach using sort O(Nlogn)
function nonRepeatinInteger_sort(arr) {
    arr.sort((a, b) => a - b);
    let val = '';
    //console.log(arr);
    for (let i = 0; i < arr.length;) {
        if (arr[i] === arr[i + 1] || arr[i] === val) {
            val = arr[i];
            i++;
        } else {
            return arr[i];
        }
    }
}

console.log('Using sort for [-1, 2, -1, 3, 2]: ', nonRepeatinInteger_sort([-1, 2, -1, 3, 2])); // 3
console.log('Using sort for [9, 4, 9, 6, 7, 4]: ', nonRepeatinInteger_sort([9, 4, 9, 6, 7, 4])); // 6
console.log('Using sort for [1,2,3]: ', nonRepeatinInteger_sort([1, 2, 3])); // 1
console.log('Using sort for [1,4,1,4,1,5,8,5,8,5,9]: ', nonRepeatinInteger_sort([1, 4, 1, 4, 1, 5, 8, 5, 8, 5, 9])); // 9