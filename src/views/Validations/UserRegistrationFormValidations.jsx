export function UserRegistrationFormValidations(data) {
    var errors = new Array();
  
    const {
        age,
        gender,
        dateOfBirth,
        fullName,
        email,
        password,
        contactNumber,
        aadharNumber,
        passportNumber,
        confirmPassword
    } = data;

    if (age < 18) {
      errors.push("Your age should be more than 18 years to register as a user"); 
    }
  
    if (!fullName) {
      errors.push("Please provide your full name as per Aadhar card.");
    }
  
    if (!email) {
      errors.push("Email is required");
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      errors.push("Incorrect email format");
    }
  
    if (!password) {
      errors.push("Password is required");
    } else if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }

    if(password !== confirmPassword){
        errors.push("Confirm password must be same as password");
    }
  
    let countUpperCase = 0;
    let countLowerCase = 0;
    let countDigit = 0;
    let countSpecialCharacters = 0;
  
    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "[",
        "{",
        "]",
        "}",
        ":",
        ";",
        "<",
        ">",
      ];
      if (specialChars.includes(password[i])) {
        countSpecialCharacters++;
      } else if (!isNaN(password[i] * 1)) {
        countDigit++;
      } else {
        if (password[i] === password[i].toUpperCase()) {
          countUpperCase++;
        }
        if (password[i] === password[i].toLowerCase()) {
          countLowerCase++;
        }
      }
    }
  
    if (countLowerCase === 0) {
      errors.push("Invalid Form, 0 lower case characters in password");
    }
  
    if (countUpperCase === 0) {
      errors.push("Invalid Form, 0 upper case characters in password");
    }
  
    if (countDigit === 0) {
      errors.push("Invalid Form, 0 digit characters in password");
    }
  
    if (countSpecialCharacters === 0) {
      errors.push("Invalid Form, 0 special characters in password");
    }
  
    if (!dateOfBirth) {
      errors.push("Please enter your date of birth.");
    }
  
    if (!contactNumber) {
      errors.push("Please provide your contact number");
    }
  
    if (!gender) {
      errors.push("Please enter your gender");
    }
  
    if (!aadharNumber) {
      errors.push("Please provide your aadhar number");
    }
  
    if (!passportNumber) {
      errors.push("Please provide your passport number");
    }
  
    return errors;
  }
  