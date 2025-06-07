document.addEventListener("DOMContentLoaded", () => {

  // -----------------------------
  // Register Form Validation
  // -----------------------------
  const registerForm = document.querySelector("form")?.closest(".register-container");
  if (registerForm) {
    document.querySelector("form").addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const pass = document.getElementById("pass").value.trim();
      const age = document.getElementById("age").value.trim();
      const gender = document.getElementById("gender").value.trim();
      const contact = document.getElementById("contact").value.trim();

      if (!name || !email || !pass || !age || !gender || !contact) {
        alert("Please fill all fields.");
        e.preventDefault();
      } else if (pass.length < 6) {
        alert("Password should be at least 6 characters long.");
        e.preventDefault();
      }
    });
  }

  // -----------------------------
  // Login Form Validation (Mocked)
  // -----------------------------
  // -----------------------------
// Login Form Handling (Mocked with Redirect)
// -----------------------------
const loginForm = document.querySelector(".login-container form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please enter email and password.");
      e.preventDefault();
    } else {
      // Mock login logic
      if (email === "admin@example.com" && password === "admin123") {
        alert("Login successful! Redirecting to homepage...");
        e.preventDefault(); // Prevent actual form submit
        setTimeout(() => {
          window.location.href = "index.html"; // Redirect
        }, 1000); // 1-second delay before redirect
      } else {
        alert("Invalid credentials.");
        e.preventDefault();
      }
    }
  });
}


  // -----------------------------
  // Appointment Booking Form
  // -----------------------------
  const appointmentForm = document.getElementById("appointmentForm");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", (e) => {
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const doctor = document.getElementById("doctor").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      if (!fullName || !email || !phone || !doctor || !date || !time) {
        alert("Please fill all fields.");
        e.preventDefault();
      } else {
        alert("Appointment booked successfully!");
      }
    });
  }

  // -----------------------------
  // Dynamic View Appointments (optional)
  // -----------------------------
  const appointmentsTable = document.querySelector("table tbody");
  if (appointmentsTable && appointmentsTable.innerHTML.trim() === "") {
    const dummyAppointments = [
      { name: "Ravi Kumar", doctor: "Dr. Sharma", date: "2025-06-15", time: "11:00 AM", status: "Confirmed" },
      { name: "Anjali Mehta", doctor: "Dr. Mehta", date: "2025-06-16", time: "3:30 PM", status: "Pending" }
    ];
    dummyAppointments.forEach(appt => {
      const row = `<tr>
        <td>${appt.name}</td>
        <td>${appt.doctor}</td>
        <td>${appt.date}</td>
        <td>${appt.time}</td>
        <td>${appt.status}</td>
      </tr>`;
      appointmentsTable.innerHTML += row;
    });
  }

  // -----------------------------
  // Scroll-to-Top Button
  // -----------------------------
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    border: none;
    background-color: #0077cc;
    color: white;
    border-radius: 50%;
    display: none;
    cursor: pointer;
    z-index: 999;
  `;
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

});
