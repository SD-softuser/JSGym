function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add any remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add any remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

console.log(mergeSortedArrays(array1, array2));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
