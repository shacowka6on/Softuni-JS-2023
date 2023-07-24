function passwordValidator(password){
    const passwordLen = (password) => {
        return password.length >= 6 && password.length <= 10;
    }
    const pattern = /^[a-zA-Z0-9]+$/;
    const validCharacters = (password) => {
        return pattern.test(password);
    }
    const digitPattern = /\d/g;
    const digitsLimit = (password) => {
        const matches = password.match(digitPattern) || [];
        const matchesLength = matches.length;
        return matchesLength >= 2;
    }

    const errors = [];
    if (!passwordLen(password)) {
        errors.push("Password must be between 6 and 10 characters");
    }
    if (!validCharacters(password)) {
        errors.push("Password must consist only of letters and digits");
    }
    if (!digitsLimit(password)) {
        errors.push("Password must have at least 2 digits");
    }
    if (errors.length > 0) {
        for (const error of errors) {
            console.log(error);
        }
    } else {
        console.log("Password is valid");
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123')
passwordValidator('#fajf23^');