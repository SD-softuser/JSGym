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
