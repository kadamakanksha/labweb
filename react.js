function generateRandomPassword(length) {
    // Define character sets
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+-=[]{};':|\",./<>?`~";

    // Initialize variables
    let password = "";
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

    // Ensure at least one character from each category
    for (const category of[uppercaseLetters, lowercaseLetters, numbers, specialCharacters]) {
        password += category[Math.floor(Math.random() * category.length)];
    }

    // Fill remaining with random characters
    while (password.length < length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    // Shuffle the password
    password = password.split("").sort(() => Math.random() - 0.5).join("");

    return password;
}

// Generate and display a random password
const password = generateRandomPassword(12);
console.log(`Your random password is: ${password}`);