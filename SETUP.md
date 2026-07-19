ProjectSphere Setup Guide

This document explains how to set up and run the ProjectSphere application locally.

Prerequisites

Before running the project, ensure you have:

A modern web browser (Chrome, Edge, Firefox, etc.)
Internet connection
Firebase account
Supabase account
Code editor (recommended: Visual Studio Code)
1. Clone the Repository

Clone the project repository:

git clone <repository-link>

Navigate into the project folder:

cd ProjectSphere
2. Firebase Configuration

ProjectSphere uses Firebase for:

User Authentication
Cloud Firestore Database
Real-time Collaboration
Explore Project Data Storage
Steps
Create a Firebase project.
Enable Firebase Authentication.
Enable Cloud Firestore Database.
Create a Web App inside Firebase.
Copy the Firebase configuration details.
Add the configuration inside:
AUTHENTICATION/figure.js

The configuration should include:

apiKey
authDomain
projectId
storageBucket
messagingSenderId
appId
3. Supabase Configuration

ProjectSphere uses Supabase Storage to store project documentation files.

Steps
Create a Supabase project.
Create a storage bucket named:
repository
Add your Supabase URL and API key inside:
repository.js

Example:

const supabase = createClient(
    "YOUR_SUPABASE_URL",
    "YOUR_SUPABASE_KEY"
);
4. Running the Project

Since the project uses JavaScript ES Modules, it must be served through a local web server.

Recommended Method (VS Code Live Server)
Install the Live Server extension.
Open the ProjectSphere folder in Visual Studio Code.
Open the starting HTML file (e.g., Sign-in.html).
Click Go Live.

The application will open automatically in your default browser.

5. Application Flow

After starting the project:

Register a new account.
Log in using your credentials.
Complete your student profile.
Upload project documentation through the Repository module.
View, download, or manage uploaded project files.
Publish GitHub repositories using the Explore module.
Browse repositories shared by other students.
Filter repositories by Technical and Non-Technical categories.
Participate in discussions using the Collaboration module.
6. Folder Structure

Example project structure:

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
├── explore
│   ├── explore.html
│   ├── explore.js
│   └── explore.css
│
├── collaboration
│   ├── collaboration.html
│   ├── collaboration.js
│   └── collaboration.css
│
├── forms
│   ├── form.html
│   ├── form.js
│   └── form.css
│
└── README.md
7. Troubleshooting
Firebase Authentication Not Working

Verify that:

Firebase configuration values are correct.
Authentication providers are enabled.
Browser console shows no Firebase initialization errors.
Project Documentation Upload Failing

Check:

Supabase bucket name is repository.
Supabase storage permissions are configured correctly.
Storage URL and API key are valid.
Explore Module Not Displaying Projects

Verify that:

The projects collection exists in Firestore.
Firestore security rules allow read access.
Project documents contain required fields:
title
description
email
githubURL
ownerUid
tech
nonTech
createdAt
Firestore Errors

Check that:

Firestore database has been created.
Security rules allow the required read/write operations.
Collection names in the application match those in Firestore.
Notes
ProjectSphere uses client-side Firebase Authentication, Cloud Firestore, and Supabase Storage.
The Repository module stores project documentation files in Supabase Storage, while metadata is maintained in Firestore.
The Explore module stores GitHub repository information entirely in Firestore and allows users to browse projects shared by themselves and others.
For production deployment, sensitive configuration values should be managed using environment variables, and Firebase and Supabase security rules should be strengthened to prevent unauthorized access.
