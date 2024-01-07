// Add interactivity here
document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    const profileImage = document.getElementById("profileImage");
    const titleElement = document.querySelector("header h1");

    // Function to make the picture bounce
    function bouncePicture() {
        profileImage.style.animation = "bounce 0.5s";
        setTimeout(() => {
            profileImage.style.animation = ""; // Clear the animation after 0.5 seconds
        }, 500);
    }

    // Function to change title color every 3 seconds
    function changeTitleColor() {
        const colors = ["#FF5733", "#33FF57", "#5733FF"]; // Example colors, you can customize
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        titleElement.style.color = randomColor;
    }

    // Set intervals for the functions
    setInterval(bouncePicture, 5000); // Bounce picture every 5 seconds
    setInterval(changeTitleColor, 3000); // Change title color every 3 seconds
});

