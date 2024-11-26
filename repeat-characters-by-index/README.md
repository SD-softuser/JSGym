# Repeat Characters by Index

## Problem Statement
Create a JavaScript function that accepts a string and returns a new string where each character in the original string is repeated a number of times equal to its index plus one. This ensures the character at index `0` appears once, the character at index `1` appears twice, and so on.

## Function Signature
```javascript
function repeatCharactersByIndex(inputString) {
    // Function implementation
}
```

## Example
### Input
`"hello"`

### Output
`"heellllllooooo"`

### Explanation

We encourage you to try solving this problem on your own first. Take some time to think through the logic and attempt an implementation. Once you've tried, you can review the solution provided below.
- The character at index `0` is `'h'` and appears `1` time.
- The character at index `1` is `'e'` and appears `2` times.
- The character at index `2` is `'l'` and appears `3` times.
- The character at index `3` is `'l'` and appears `4` times.
- The character at index `4` is `'o'` and appears `5` times.

Combining these repetitions gives the output: `"heellllllooooo"`.

## Edge Cases
### Input
`"abc"`

### Output
`"abbccc"`

### Explanation
- `'a'` appears `1` time.
- `'b'` appears `2` times.
- `'c'` appears `3` times.

Result: `"abbccc"`

### Input
`"A!"`

### Output
`"A!!"`

### Explanation
- `'A'` appears `1` time.
- `'!'` appears `2` times.

Result: `"A!!"`

### Input
`""`

### Output
`""`

### Explanation
For an empty string, the output is also an empty string.

## Implementation
Here is the JavaScript implementation of the function:

```javascript
function repeatCharactersByIndex(inputString) {
    if (typeof inputString !== 'string') {
        throw new Error("Input must be a string");
    }

    // Convert the string to an array, map through each character with its index
    const repeatedString = inputString
        .split('')
        .map((char, index) => char.repeat(index + 1)) // Add 1 to the index for correct repetition
        .join(''); // Join the resulting array back to a string

    return repeatedString;
}
```

## Test Cases
Here are some test cases to validate the function:

### Test Case 1
#### Input
`"hello"`

#### Expected Output
`"heellllllooooo"`

### Test Case 2
#### Input
`"abc"`

#### Expected Output
`"abbccc"`

### Test Case 3
#### Input
`"A!"`

#### Expected Output
`"A!!"`

### Test Case 4
#### Input
`""`

#### Expected Output
`""`

### Test Case 5
#### Input
`123`

#### Expected Output
Throws an error: `"Input must be a string"`.

## How to Use
1. Copy the function implementation into your JavaScript file.
2. Call the function with a string as input.
3. Handle any errors if the input is invalid.

## Notes
- The function assumes valid ASCII/Unicode characters.
- Non-string inputs will throw an error for safety.

