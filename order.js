// order.js

// Store orders in an array
const orders = [];

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Get form input values
  const food = document.getElementById("food").value;
  const address = document.getElementById("address").value;

  // Add order to array
  orders.push({ food, address });

  // Show success message
  document.getElementById("orderStatus").textContent = `Order placed for ${food} to be delivered at ${address}.`;

  // Render table
  renderOrdersTable();

  // Reset the form
  document.getElementById("orderForm").reset();
});

function renderOrdersTable() {
  let html = `
    <table>
      <thead>
        <tr>
          <th>Food</th>
          <th>Delivery Address</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (const order of orders) {
    html += `
      <tr>
        <td>${order.food}</td>
        <td>${order.address}</td>
      </tr>
    `;
  }

  html += `
      </tbody>
    </table>
  `;

  document.getElementById("orderTableContainer").innerHTML = html;
}
