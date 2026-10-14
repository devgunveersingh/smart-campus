const API_URL = "http://localhost:8080/api/announcements";

async function loadAnnouncements() {
  try {
    const response = await fetch(API_URL);
    const announcements = await response.json();

    const listDiv = document.getElementById("announcementsList");
    listDiv.innerHTML = ""; 

    if (announcements.length === 0) {
      listDiv.innerHTML = "<p>No announcements yet.</p>";
      return;
    }

    announcements.reverse().forEach((a) => {
  const item = document.createElement("div");
  item.className = "announcement-item";

  const title = document.createElement("h3");
  title.textContent = a.title;

  const content = document.createElement("p");
  content.textContent = a.content;

  const date = document.createElement("small");
  date.textContent = new Date(a.createdAt).toLocaleString();

  item.append(title, content, date);
  listDiv.appendChild(item);
});
  } catch (err) {
    document.getElementById("announcementsList").textContent = "Could not load announcements.";
  }
}

const form = document.getElementById("announcementForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content })
    });

    if (response.ok) {
      document.getElementById("message").textContent = "Posted!";
      form.reset();
      loadAnnouncements(); 
    } else {
      document.getElementById("message").textContent = "Failed to post.";
    }
  } catch (err) {
    document.getElementById("message").textContent = "Could not reach the server.";
  }
});

loadAnnouncements();