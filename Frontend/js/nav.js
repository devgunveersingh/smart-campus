(function () {
  const user = JSON.parse(localStorage.getItem("user"));

  // not logged in -> back to login
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const nav = document.createElement("nav");
  nav.innerHTML = `
    <a href="dashboard.html">Dashboard</a>
    <a href="announcements.html">Announcements</a>
    <a href="lostfound.html">Lost &amp; Found</a>
    <span class="nav-right">
      <span id="navUser"></span>
      <button id="logoutBtn">Logout</button>
    </span>
  `;
  document.body.prepend(nav);

  document.getElementById("navUser").textContent = user.name;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "login.html";
  });
})();