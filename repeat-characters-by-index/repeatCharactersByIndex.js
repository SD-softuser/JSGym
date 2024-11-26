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

// Example usage
try {
    console.log(repeatCharactersByIndex("hello")); // Output: "heellllllooooo"
    console.log(repeatCharactersByIndex("abc"));   // Output: "abbccc"
    console.log(repeatCharactersByIndex("A!"));    // Output: "A!!"
} catch (error) {
    console.error(error.message);
}
