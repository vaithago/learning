// bubblesort should not be used for larger arrays, can be used for smaller ones for its simplicity.
// Rearrange array in decreasing order
const a = [5, 2, 8, 7, 1];
const b = [5, 2, 8, 7, 1];

function sortArrayDesc(arr) {
    let temp;
    //Sort the array in descending order
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log('Before sort :', a);
console.log('After sort brute force:', sortArrayDesc(b));
//the time complexity of Bubble Sort is O(n2). The main advantage of Bubble Sort is the simplicity of the algorithm. 
//The space complexity for Bubble Sort is O(1), because only a single additional memory space is required i.e. for temp variable.
function bubble_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // let swap;
    // do {
    //     swap = false;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] > arr[i + 1]) {
    //             const temp = arr[i];
    //             arr[i] = arr[i + 1];
    //             arr[i + 1] = temp;
    //             swap = true;
    //         }
    //     }

    // } while (swap)
    let swap = true;
    while (swap) {
        swap = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) { // ascending order
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
    }
    return arr;
}
console.log('After sort:', bubble_sort(a));