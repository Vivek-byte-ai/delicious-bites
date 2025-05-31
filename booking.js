document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const status = document.getElementById("bookingStatus");
  const tableBody = document.querySelector("#bookingTable tbody");

  // Function to safely load bookings from localStorage and display in table
  function loadBookings() {
    let bookings = [];
    try{
      bookings = JSON.parse(localStorage.getItem("bookings"));
      if (!Array.isArray(bookings)) {
        bookings = [];
      }
    } catch (e) {
      bookings = [];
    }

    tableBody.innerHTML = ""; // Clear existing rows

    bookings.forEach((booking) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${booking.name}</td>
        <td>${booking.date}</td>
        <td>${booking.time}</td>
        <td>${booking.guests}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Load bookings on page load
  loadBookings();

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    if (name && date && time && guests) {
      const newBooking = { name, date, time, guests };

      // Get existing bookings safely
      let bookings = [];
      try {
        bookings = JSON.parse(localStorage.getItem("bookings"));
        if (!Array.isArray(bookings)) {
          bookings = [];
        }
      } catch (e) {
        bookings = [];
      }

      bookings.push(newBooking);

      localStorage.setItem("bookings", JSON.stringify(bookings));

      status.innerText = "Booking successful!";
      status.style.color = "green";
      status.style.fontWeight = "bold";

     

      loadBookings();

      // Hide message after 5 seconds
      setTimeout(() => {
        status.innerText = "";
         form.reset();
      }, 5000);
    } else {
      status.innerText = "Please fill in all fields.";
      status.style.color = "red";

      setTimeout(() => {
        status.innerText = "";
      }, 3000);
    }
  });
});
