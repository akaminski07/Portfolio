document.addEventListener("DOMContentLoaded", function() {

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


    //Scrolling to div
    const scroll = document.getElementById("navbar");
    const sections = document.querySelectorAll(".home, .about, .projects, .contact");

    scroll.addEventListener("click", function(evt) {
        const button =  evt.target.id;
        const section = document.querySelector(`.${button}`);

        if (section) {
            const sectionTop = section.offsetTop;
            window.scrollTo({
                top: sectionTop,
                behavior: "smooth"
            });
        }

        if (button === "home"){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
        evt.preventDefault();
    }, true);

    window.addEventListener("scroll", function() {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Check if the current scroll position is within the section's area
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.classList[0];
            }
        });

        // Remove 'currentPage' from all nav items
        document.querySelectorAll("#navbar li").forEach(li => {
            li.classList.remove("currentPage");
        });

        // Add 'currentPage' to the nav item corresponding to the current section
        if (currentSection) {
            document.getElementById(currentSection).classList.add("currentPage");
        }
    });

});


