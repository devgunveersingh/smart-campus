# Smart Campus Platform

A full-stack smart campus platform MVP — student/admin portal with announcements, study resources, lost & found, complaints, and events.

## Tech Stack

- **Frontend:** Plain HTML, CSS, and JavaScript (no framework, no build step)
- **Backend:** Java Spring Boot
- **Database:** MySQL
- **Auth:** Email/password with JWT tokens

## Project Structure

```
smart-campus/
├── Backend/                # Spring Boot project
│   ├── src/main/java/com/example/demo/
│   ├── src/main/resources/
│   │   ├── application.properties.example  # template — copy this, don't edit directly
│   │   └── application.properties          # your local DB config (git-ignored)
│   └── pom.xml
└── Frontend/                # Plain HTML/CSS/JS
    ├── index.html
    ├── style.css
    └── js/
```

## Getting Started

### Prerequisites

- Java JDK 17+
- MySQL (Server + Workbench)
- IntelliJ IDEA (for the backend)
- VS Code with the **Live Server** extension (for the frontend)
- Git

### Setup

1. **Clone the repo**
   ```
   git clone https://github.com/devgunveersingh/smart-campus.git
   ```

2. **Set your Git identity** (first time on a new machine)
   ```
   git config --global user.email "your-email@example.com"
   git config --global user.name "Your Name"
   ```

3. **Create your local database**
   In MySQL Workbench, run:
   ```sql
   CREATE DATABASE smart_campus;
   ```

4. **Set up your local config**
   Inside `Backend/src/main/resources/`, copy `application.properties.example` to a new file named `application.properties`, then fill in your own MySQL username and password. This file is git-ignored — it stays local to your machine and is never pushed.

5. **Run the backend**
   Open the `Backend` folder in IntelliJ, let dependencies download, then run `DemoApplication.java`. You should see `Tomcat started on port 8080` with no errors.

6. **Run the frontend**
   Open the `Frontend` folder in VS Code, right-click `index.html`, and choose **Open with Live Server**.

## Notes

- Each collaborator needs their **own** `application.properties` with their own local DB credentials — never commit this file.
- If port 8080 is already in use, stop the previous running instance in IntelliJ's Run panel before starting a new one.
