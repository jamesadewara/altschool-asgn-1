// User details object
const USER = {
  username: "james",
  password: "jamexJamex",
  firstName: "James",
  lastName: "Adewara",
  course: "School of Engineering",
  school: "ALT SCHOOL AFRICA",
};

// Validator class
class Validator {
  validateUsername(username, maxChars = 10) {
    if (username.length >= maxChars) {
      throw new Error(`Username must be less than ${maxChars} characters`);
    }
    return username;
  }

  validatePassword(password, minChars = 6) {
    if (password.length <= minChars) {
      throw new Error(`Password must be greater than ${minChars} characters`);
    }
    return password;
  }

  confirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }
    return true;
  }

  validateCredentials(username, password) {
    if (username !== USER.username || password !== USER.password) {
      throw new Error("Invalid username or password");
    }
    return true;
  }
}

// User
class UserManager {
  constructor() {
    this.validator = new Validator();
  }

  login() {
    try {
      const username = prompt("Please enter your username:");
      if (username === null) return;

      this.validator.validateUsername(username);

      const password = prompt("Please enter your password:");
      if (password === null) return;

      this.validator.validatePassword(password);

      const confirmPassword = prompt("Please confirm your password:");
      if (confirmPassword === null) return;

      this.validator.confirmPassword(password, confirmPassword);

      this.validator.validateCredentials(username, password);

      this.displayUserDetails();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }

  displayUserDetails() {
    document.getElementById(
      "user-name"
    ).textContent = `${USER.firstName} ${USER.lastName}`;
    document.getElementById("user-username").textContent = USER.username;
    document.getElementById("user-course").textContent = USER.course;
    document.getElementById("user-school").textContent = USER.school;
    document.getElementById("user-details").style.display = "block";
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  const userManager = new UserManager();

  // Add event listener to the login button
  document.getElementById("login-btn").addEventListener("click", function () {
    userManager.login();
  });

  // Show initial instructions
  alert(
    `Assignment Instructions:\n\n1. Username must be less than 10 characters\n2. Password must be greater than 6 characters\n3. You must confirm your password\n4. Credentials must match the stored user\n\nTest Credentials:\nUsername: ${USER.username}\nPassword: ${USER.password}`
  );
});
