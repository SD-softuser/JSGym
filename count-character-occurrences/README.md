# Count Character Occurrences in a String (Case-Insensitive)

## Problem Statement
Write a function that counts the number of times a specific character appears in a given string. The function should be case-insensitive, meaning it should count both uppercase and lowercase occurrences of the character.

### Requirements
1. The function should take two inputs:
   - `inputString`: The string to search in.
   - `targetChar`: The character to count.
2. The function should return the count of occurrences of the character in the string.
3. Handle edge cases such as empty inputs or invalid characters gracefully.

---

### Example
#### Input:
```plaintext
inputString = "Programming is fun!"
targetChar = "g"
```

#### Output:
```plaintext
The character "g" appears 2 times in the string.
```

#### Input:
```plaintext
inputString = "JavaScript is Awesome!"
targetChar = "a"
```

#### Output:
```plaintext
The character "a" appears 3 times in the string.
```

---

### Edge Cases
1. **Empty Input String:**
   - Input: `inputString = "", targetChar = "a"`
   - Output: `0`
2. **Empty Target Character:**
   - Input: `inputString = "Hello", targetChar = ""`
   - Output: `Error: Both input string and target character are required.`
3. **Special Characters:**
   - Input: `inputString = "#123@#@!", targetChar = "#"`
   - Output: `2`

---

## Try It Yourself
We encourage you to solve this problem on your own first. Think about the logic and write your implementation. Once you’re done, compare your solution with the one provided below.

---

## Implementation
```javascript
function countCharacterOccurrences(inputString, targetChar) {
    if (!inputString || !targetChar) {
        console.error("Both input string and target character are required.");
        return 0;
    }

    // Normalize both the input string and target character to lowercase for case-insensitive comparison
    const normalizedString = inputString.toLowerCase();
    const normalizedTargetChar = targetChar.toLowerCase();

    // Initialize a counter to store the occurrences
    let count = 0;

    // Loop through the string and count matches
    for (let char of normalizedString) {
        if (char === normalizedTargetChar) {
            count++;
        }
    }

    return count;
}

// Example usage:
const inputString = "Programming is fun!";
const targetChar = "g";
const occurrences = countCharacterOccurrences(inputString, targetChar);
console.log(`The character "${targetChar}" appears ${occurrences} times in the string.`);
```

---

## Test Cases
### Test Case 1:
**Input:**
```javascript
countCharacterOccurrences("Hello World", "o");
```
**Output:**
```plaintext
2
```

### Test Case 2:
**Input:**
```javascript
countCharacterOccurrences("JavaScript is Awesome!", "a");
```
**Output:**
```plaintext
3
```

### Test Case 3:
**Input:**
```javascript
countCharacterOccurrences("#123@#@!", "#");
```
**Output:**
```plaintext
2
```

### Test Case 4 (Edge Case):
**Input:**
```javascript
countCharacterOccurrences("", "a");
```
**Output:**
```plaintext
0
```

### Test Case 5 (Edge Case):
**Input:**
```javascript
countCharacterOccurrences("Hello", "");
```
**Output:**
```plaintext
Error: Both input string and target character are required.
```

