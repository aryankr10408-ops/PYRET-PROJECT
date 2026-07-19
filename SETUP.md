# ProjectSphere Setup Guide

This document explains how to set up and run the ProjectSphere application locally.

---

# Prerequisites

Before running the project, make sure you have:

* A modern web browser (Chrome, Edge, Firefox, etc.)
* Internet connection
* Firebase account
* Supabase account
* Code editor (recommended: Visual Studio Code)

---

# 1. Clone the Repository

Clone the project repository:

```bash
git clone <repository-link>
```

Navigate into the project folder:

```bash
cd ProjectSphere
```

---

# 2. Firebase Configuration

ProjectSphere uses Firebase for:

* User authentication.
* Firestore database.

Steps:

1. Create a Firebase project.
2. Enable Firebase Authentication.
3. Enable Firestore Database.
4. Create a web application inside Firebase.
5. Copy the Firebase configuration details.

Add the Firebase configuration inside:

```
AUTHENTICATION/figure.js
```

The configuration should contain:

* apiKey
* authDomain
* projectId
* storageBucket
* messagingSenderId
* appId

---

# 3. Supabase Configuration

ProjectSphere uses Supabase Storage for storing project documentation files.

Steps:

1. Create a Supabase project.
2. Create a storage bucket named:

```
repository
```

3. Add the Supabase project URL and key inside:

```
repository.js
```

Configuration:

```javascript
const supabase = createClient(
    "YOUR_SUPABASE_URL",
    "YOUR_SUPABASE_KEY"
);
```

---

# 4. Running the Project

Since the project uses JavaScript modules, it should be served through a local server.

Recommended method:

Using VS Code Live Server extension:

1. Install Live Server extension.
2. Open the project folder.
3. Open the starting HTML file.
4. Click:

```
Go Live
```

The application will open in your browser.

---

# 5. Application Flow

After starting the project:

1. Register a new account.
2. Login using your credentials.
3. Complete your profile information.
4. Upload project documentation.
5. View and manage uploaded projects.
6. Use collaboration channels for discussions.

---

# 6. Folder Structure

Example structure:

```
ProjectSphere
│
├── AUTHENTICATION
│   ├── Sign-in.html
│   ├── Sign-up.html
│   └── figure.js
│
├── dashboard
│
├── repository
│   ├── repository.html
│   ├── repository.js
│   └── repository.css
│
├── collaboration
│   ├── form.html
│   ├── form.js
│   └── form.css
│
└── README.md
```

---

# Troubleshooting

## Firebase authentication not working

Check:

* Firebase configuration values.
* Authentication providers are enabled.
* Browser console errors.

---

## File upload failing

Check:

* Supabase bucket name.
* Supabase permissions.
* Correct storage configuration.

---

## Firestore errors

Check:

* Firestore database is created.
* Security rules allow required operations.
* Collection names match the application.

---

# Notes

The application currently uses client-side Firebase and Supabase integration. For production deployment, environment variables and stricter security rules should be added.
