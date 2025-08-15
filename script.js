document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from submitting

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let isValid = true;

    // Name validation
   let namePattern = /^[A-Za-z\s]+$/;
if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
} else if (!namePattern.test(name)) {
    document.getElementById("nameError").textContent = "Name can only contain letters and spaces";
    isValid = false;
}

    // Email validation with regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required";
        isValid = false;
    }

    // If valid, show success
    if (isValid) {
        document.getElementById("successMessage").textContent = "Form submitted successfully!";
        successMessage.style.opacity = 1;
    }
});
