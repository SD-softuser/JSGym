# Merge Two Sorted Arrays into One Sorted Array

## Problem Statement
Write a function that takes two sorted arrays as input and merges them into a single sorted array. The resulting array should contain all the elements from both input arrays, sorted in ascending order. The function should handle arrays of varying lengths, including empty arrays.

---

## Example

### Input:
```plaintext
Array 1: [1, 3, 5, 7]
Array 2: [2, 4, 6, 8]
```

### Output:
```plaintext
Merged Array: [1, 2, 3, 4, 5, 6, 7, 8]
```

---

## Test Cases

### Test Case 1:
#### Input:
```plaintext
Array 1: [1, 3, 5]
Array 2: [2, 4, 6]
```
#### Output:
```plaintext
Merged Array: [1, 2, 3, 4, 5, 6]
```

### Test Case 2:
#### Input:
```plaintext
Array 1: [1, 2, 3]
Array 2: [4, 5, 6]
```
#### Output:
```plaintext
Merged Array: [1, 2, 3, 4, 5, 6]
```

### Test Case 3:
#### Input:
```plaintext
Array 1: []
Array 2: [2, 4, 6]
```
#### Output:
```plaintext
Merged Array: [2, 4, 6]
```

### Test Case 4:
#### Input:
```plaintext
Array 1: [1, 3, 5]
Array 2: []
```
#### Output:
```plaintext
Merged Array: [1, 3, 5]
```

### Test Case 5:
#### Input:
```plaintext
Array 1: []
Array 2: []
```
#### Output:
```plaintext
Merged Array: []
```

---

## Try It Yourself!
Before diving into the solution, take a moment to attempt solving the problem on your own. Think about how you can use the properties of sorted arrays to efficiently merge them into a single sorted array. Once you've tried, compare your approach with the solution provided below.

---

## Implementation

### JavaScript Code:
```javascript
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
```

---

## Explanation
1. **Initialization**: Start with two pointers, `i` and `j`, set to `0`, representing the current index in each array. Create an empty array, `mergedArray`, to store the merged result.
2. **Comparison Loop**: Use a `while` loop to compare elements of `arr1` and `arr2` at indices `i` and `j`. Append the smaller element to `mergedArray` and increment the respective pointer.
3. **Remaining Elements**: If one array is exhausted, append the remaining elements of the other array to `mergedArray`.
4. **Return the Result**: The function returns the merged and sorted array.

---

## Complexity Analysis
- **Time Complexity**: `O(n + m)`, where `n` and `m` are the lengths of the two input arrays. Each element is processed exactly once.
- **Space Complexity**: `O(n + m)` for the merged array.

