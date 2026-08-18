const form = document.getElementById("reservationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    message.innerHTML =
        "Thank you, " + name +
        "! Your reservation request has been received. We look forward to welcoming you to ÉLITE.";

    form.reset();
});