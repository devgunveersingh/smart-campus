const API_URL = "http://localhost:8080/api/auth";

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      if (response.ok) {
        document.getElementById("message").textContent = "Registered! Redirecting to login...";
        setTimeout(() => window.location.href = "login.html", 1000);
      } else {
        document.getElementById("message").textContent = "Registration failed. Email may already be in use.";
      }
    } catch (err) {
      document.getElementById("message").textContent = "Could not reach the server. Is the backend running?";
    }
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user)); 
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("message").textContent = "Invalid email or password.";
      }
    } catch (err) {
      document.getElementById("message").textContent = "Could not reach the server. Is the backend running?";
    }
  });
}