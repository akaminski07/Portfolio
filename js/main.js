function myFunction() {
    // Define the email to be copied
    const email = "gameradrianox@gmail.com";

    // Use the Clipboard API to copy the email
    navigator.clipboard.writeText(email).then(() => {
        // Show a confirmation alert
        alert("Copied the email: " + email);
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}

// Attach the function to the <a> element's click event
document.getElementById("email").addEventListener("click", myFunction);
