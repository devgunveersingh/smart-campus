const API_URL = "http://localhost:8080/api/lostfound";

const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  window.location.href = "login.html";
}

async function loadItems() {
  try {
    const response = await fetch(API_URL);
    const items = await response.json();

    const listDiv = document.getElementById("lostFoundList");
    listDiv.innerHTML = "";

    if (items.length === 0) {
      listDiv.innerHTML = "<p>No items reported yet.</p>";
      return;
    }

    items.reverse().forEach((item) => {
      const div = document.createElement("div");
      div.className = "lostfound-item";
      div.innerHTML = `
        <h3>${item.itemName} (${item.status})</h3>
        <p>${item.description}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        <small>Reported by: ${item.reportedBy ? item.reportedBy.name : "Unknown"}</small>
      `;
      listDiv.appendChild(div);
    });
  } catch (err) {
    document.getElementById("lostFoundList").textContent = "Could not load items.";
  }
}

const form = document.getElementById("lostFoundForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const itemName = document.getElementById("itemName").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;
  const status = document.getElementById("status").value;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName,
        description,
        location,
        status,
        reportedBy: { id: user.id }
      })
    });

    if (response.ok) {
      document.getElementById("message").textContent = "Reported!";
      form.reset();
      loadItems();
    } else {
      document.getElementById("message").textContent = "Failed to report item.";
    }
  } catch (err) {
    document.getElementById("message").textContent = "Could not reach the server.";
  }
});

loadItems();