export function OrganizationRegistrationFormValidations(data) {
    var errors = new Array();
  
    const {
      organizationName,
      email,
      organizationOwner,
      password,
      contactNumber,
      organizationRegNumber,
      ownerPassportNumber,
      organizationLocation,
      confirmPassword
    } = data;
  
    if (!organizationName) {
      errors.push("Please provide your organization name");
    }
    
    if(password !== confirmPassword){
      errors.push("Confirm password must be same as password");
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
  
    let countUpperCase = 0;
    let countLowerCase = 0;
    let countDigit = 0;
    let countSpecialCharacters = 0;
  
    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        "!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","{","]","}",":",";","<",">",];
      if (specialChars.includes(password[i])) {
        countSpecialCharacters++;
      } else if (!isNaN(password[i] * 1)) {
        countDigit++;
      } else {
        if (password[i] == password[i].toUpperCase()) {
          countUpperCase++;
        }
        if (password[i] == password[i].toLowerCase()) {
          countLowerCase++;
        }
      }
    }
  
    if (countLowerCase == 0) {
      errors.push("Invalid Form, 0 lower case characters in password");
    }
  
    if (countUpperCase == 0) {
      errors.push("Invalid Form, 0 upper case characters in password");
    }
  
    if (countDigit == 0) {
      errors.push("Invalid Form, 0 digit characters in password");
    }
  
    if (countSpecialCharacters == 0) {
      errors.push("Invalid Form, 0 special characters in password");
    }
  
    if (!organizationOwner) {
      errors.push("Please provide your organization owner name");
    }
  
    if (!contactNumber) {
      errors.push("Please provide your organization contact number");
    }
  
    // if (contactNumber > 10) {
    //   errors.push("Contact Number should not exceed 10 digits");
    // }
  
    if (!organizationRegNumber) {
      errors.push("Please provide your organization Registration number");
    }
  
    if (!ownerPassportNumber) {
      errors.push("Please provide your organization owner passport number");
    }
  
    if (!organizationLocation) {
      errors.push("Please provide your organization location");
    }
  
    return errors;
  }
  