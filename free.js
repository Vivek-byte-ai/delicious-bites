document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const status = document.getElementById("bookingStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop actual form submission

    // Get values from form
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    // Check if all fields are filled (optional)
    if (name && date && time && guests) {
      // Create message
      const message = `${name} has successfully booked a table for ${guests} guest(s) on ${date} at ${time}.`;

      // Show the message
      status.innerText = message;
      status.style.color = "green";
      status.style.fontWeight = "bold";

      // Clear form
      form.reset();
    } else {
      status.innerText = "Please fill in all fields correctly.";
      status.style.color = "red";
    }
  });
});
