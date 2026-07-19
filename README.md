ProjectSphere — Student Project Showcase Platform
Overview

ProjectSphere is a student project showcase platform that helps students create, store, and present their technical projects.

Students often build projects during hackathons, courses, competitions, clubs, and personal learning activities. However, many of these projects become difficult to access after completion.

ProjectSphere provides a platform where students can maintain their profiles, upload project documentation, share GitHub repositories, explore projects from other students, and communicate through collaboration channels.

The goal of the platform is to preserve student work, encourage knowledge sharing, and make technical projects easier to discover and learn from.

Problem Statement

Student projects are often scattered across different platforms or remain inaccessible after they are completed.

This creates challenges such as:

Students finding it difficult to showcase their achievements.
Juniors losing access to previous learning resources.
Potential collaborators being unable to discover interesting projects.
Developers having no centralized place to browse peer-built projects.

ProjectSphere addresses these issues by providing a structured platform for documenting, storing, exploring, and sharing student projects.

Features Implemented
1. User Authentication
User registration and login system.
Authentication handled using Firebase Authentication.
Protected pages accessible only to authenticated users.
2. Student Profiles

Users can create and manage their profiles.

Profile information includes:

Username
Email
Name
Age
Gender
Degree
Academic Year
Profile Image

Each user's profile is linked with their uploaded projects and activities.

3. Project Repository

Students can create and manage project documentation.

Implemented features:

Create project entries.
Add project title and description.
Upload project documentation (PDF).
View uploaded documentation.
Delete uploaded projects.

Project metadata is stored in Firebase Firestore while project documents are stored using Supabase Storage.

4. Explore Projects

The Explore module enables students to publish and discover GitHub repositories created by themselves and other users.

Features
Add GitHub repository links.
Store repository title and description.
Categorize projects as:
Technical
Non-Technical
View personal repositories (Mine).
Browse repositories shared by other students.
Filter repositories using category-based filters.
Open GitHub repositories directly from the platform.

Each explore project contains:

Project Title
Owner Email
Project Description
GitHub Repository URL
Technical / Non-Technical Category
Creation Timestamp

Repository information is stored inside the projects collection in Firebase Firestore.

5. Collaboration Module

ProjectSphere includes a real-time communication platform for discussions.

Features:

Technical discussion channel.
Non-technical discussion channel.
Real-time message synchronization.
User-specific messages.

Messages are stored and synchronized using Firebase Firestore.

Technology Stack
Frontend
HTML5
CSS3
JavaScript (ES Modules)
Authentication
Firebase Authentication
Database
Firebase Firestore
File Storage
Supabase Storage
Project Workflow
User registers and logs into the platform.
User profile information is stored in Firestore.
User creates project documentation inside the Repository module.
Project files are uploaded to Supabase Storage.
Project metadata is stored in Firestore.
User can publish GitHub repositories through the Explore module.
Other students can browse repositories and filter projects by category.
Users communicate through real-time collaboration channels.
Database Structure
profileinfo Collection

Stores student profile information.

Fields
uid
username
email
name
age
gender
degree
year
imageURL
repositories Collection

Stores uploaded project documentation.

Fields
title
description
ownerUid
ownerEmail
pdfURL
publicId
createdAt
projects Collection

Stores repositories shared through the Explore module.

Fields
title
description
email
githubURL
ownerUid
tech
nonTech
createdAt
chats Collection

Stores collaboration messages.

Fields
uid
username
written_material
category
createdAt
Future Improvements

Possible future enhancements include:

Public project discovery without login.
Search projects by title or keyword.
Technology-specific tags (React, Python, Java, etc.).
Repository sorting by newest or popularity.
Team-based projects.
Project comments and reviews.
Project likes and bookmarking.
Rich project pages with screenshots, images, and videos.
User following system.
Project analytics and view counts.
Conclusion

ProjectSphere provides a comprehensive platform for showcasing student innovation by integrating authentication, student profiles, project documentation management, GitHub repository sharing, and real-time collaboration.

The newly added Explore module extends the platform beyond personal project storage by enabling students to publish, browse, and discover GitHub repositories from other users. This promotes collaboration, improves project visibility, and creates a centralized space where students can learn from one another and showcase their technical work.
