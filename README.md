# ProjectSphere — Student Project Showcase Platform

## Overview

ProjectSphere is a student project showcase platform that helps students create, store, and present their technical projects.

Students often build projects during hackathons, courses, competitions, clubs, and personal learning activities. However, many of these projects become difficult to access after completion.

ProjectSphere provides a platform where students can maintain their profiles, upload project documentation, and communicate with other students through collaboration channels.

The goal of the platform is to preserve student work and make technical projects easier to share and learn from.

---

# Problem Statement

Student projects are often scattered across different platforms or remain inaccessible after they are completed.

This creates challenges such as:

* Students finding it difficult to showcase their achievements.
* Juniors losing access to previous learning resources.
* Potential collaborators being unable to discover interesting projects.

ProjectSphere aims to provide a structured environment for students to document and share their work.

---

# Features Implemented

## User Authentication

* User registration and login system.
* Authentication handled using Firebase Authentication.
* Protected pages accessible only to logged-in users.

---

## Student Profiles

Users can create and manage their profiles.

Profile information includes:

* Username
* Email
* Name
* Age
* Gender
* Degree
* Academic year
* Profile image

Each user's profile is connected with their uploaded projects.

---

## Project Repository

Students can create and manage project entries.

Implemented features:

* Create project entries.
* Add project title and description.
* Upload project documentation files.
* View uploaded files.
* Delete uploaded projects.

Project metadata is stored in Firebase Firestore and project files are stored using Supabase Storage.

---

## Collaboration Module

ProjectSphere includes a real-time communication section for student discussions.

Features:

* Technical discussion channel.
* Non-technical discussion channel.
* Real-time message updates.
* User-based messages.

Messages are stored and synchronized using Firebase Firestore.

---

# Technology Stack

## Frontend

* HTML
* CSS
* JavaScript (ES Modules)

## Authentication

* Firebase Authentication

## Database

* Firebase Firestore

## File Storage

* Supabase Storage

---

# Project Workflow

1. User creates an account and logs in.
2. User profile information is stored in Firestore.
3. User creates project entries.
4. Project documents are uploaded to Supabase Storage.
5. Project details are stored in Firestore.
6. Users can communicate through collaboration channels.

---

# Database Structure

## profileinfo Collection

Stores student profile information.

Fields:

* uid
* username
* email
* name
* age
* gender
* degree
* year
* imageURL

## repositories Collection

Stores project information.

Fields:

* title
* description
* ownerUid
* ownerEmail
* pdfURL
* publicId
* createdAt

## chats Collection

Stores collaboration messages.

Fields:

* uid
* username
* written_material
* category
* createdAt

---

# Future Improvements

Possible improvements:

* Public project discovery page.
* Search and filtering system.
* Technology tags.
* Team-based projects.
* Project comments and feedback.
* Project analytics.
* Rich project pages with images and videos.

---

# Conclusion

ProjectSphere provides a foundation for a student innovation showcase platform by combining student profiles, project documentation storage, and collaboration features.

The platform helps students preserve their technical work and provides a place where projects can be shared, discussed, and improved.
