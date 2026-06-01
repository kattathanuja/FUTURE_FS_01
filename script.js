alert("Welcome to Thanuja Portfolio 👋");
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("msg").innerText =
        "✅ Message sent successfully!";

    alert("Thanks for contacting me!");
});