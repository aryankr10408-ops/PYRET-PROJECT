# ProjectSphere Architecture Document

## Overview

ProjectSphere follows a client-side web application architecture where the frontend communicates with cloud-based services for authentication, database operations, file storage, and project sharing.

The system is divided into three major parts:

1. Frontend Application
2. Firebase Services
3. Supabase Storage

---

# System Architecture

```
                    User
                     |
                     |
              Frontend Application
             (HTML/CSS/JavaScript)
                     |
        --------------------------------------
        |                  |                 |
        |                  |                 |
 Firebase Authentication  Firestore     Supabase Storage
        |                 Database             |
        |          --------------------        |
        |          |        |        |         |
        |      Profiles Repositories Projects Chats
        |                                  |
 Authentication                     Project Files
                                    (PDF Documents)
```

---

# 1. Frontend Layer

The frontend is developed using:

- HTML
- CSS
- JavaScript (ES Modules)

The frontend is responsible for:

- User interface.
- User interactions.
- Sending and receiving data.
- Displaying projects and profiles.
- Managing application navigation.

Main modules:

## Authentication Module

Handles:

- User login.
- User registration.
- Authentication state checking.
- Protected page access.

---

## Profile Module

Handles:

- Displaying user information.
- Updating profile details.
- Loading profile images.

---

## Repository Module

Handles:

- Creating project documentation entries.
- Uploading project documentation (PDF).
- Displaying uploaded projects.
- Viewing uploaded files.
- Deleting projects.

---

## Explore Module

Handles:

- Publishing GitHub repositories.
- Displaying personal repositories (Mine).
- Displaying repositories uploaded by other users (Others).
- Filtering repositories by Technical and Non-Technical categories.
- Opening GitHub repository links directly.
- Organizing projects for easy discovery.

---

## Collaboration Module

Handles:

- Real-time discussions.
- Category-based conversations.
- Sending messages.
- Displaying messages instantly using Firestore listeners.

---

# 2. Firebase Services

Firebase is used as the backend service for authentication and database operations.

---

## Firebase Authentication

Purpose:

- Manage user accounts.
- Verify logged-in users.
- Protect application pages.

Workflow:

```
User Login
    |
Firebase Authentication
    |
Authentication State Check
    |
Access Dashboard
```

---

## Firestore Database

Firestore stores structured application data.

Collections:

### profileinfo

Stores user profile information.

Example:

```
profileinfo
 |
 |-- uid
 |-- username
 |-- email
 |-- name
 |-- age
 |-- gender
 |-- degree
 |-- year
 |-- imageURL
```

---

### repositories

Stores uploaded project documentation.

Example:

```
repositories
 |
 |-- title
 |-- description
 |-- ownerUid
 |-- ownerEmail
 |-- pdfURL
 |-- publicId
 |-- createdAt
```

---

### projects

Stores GitHub repositories shared through the Explore module.

Example:

```
projects
 |
 |-- title
 |-- description
 |-- email
 |-- githubURL
 |-- ownerUid
 |-- tech
 |-- nonTech
 |-- createdAt
```

---

### chats

Stores collaboration messages.

Example:

```
chats
 |
 |-- uid
 |-- username
 |-- written_material
 |-- category
 |-- createdAt
```

---

# 3. Supabase Storage

Supabase Storage is used for storing project documentation files.

Workflow:

```
User selects PDF
       |
Repository Module
       |
Supabase Storage Upload
       |
Public File URL Generated
       |
URL Stored in Firestore
```

The database stores file references while the actual documents are stored in Supabase.

---

# Data Flow

## Uploading a Project

1. User enters project information.
2. User selects a documentation file.
3. File is uploaded to Supabase Storage.
4. Supabase returns a public file URL.
5. Project details and file URL are stored in the **repositories** collection.
6. The project becomes available in the user's repository.

---

## Publishing a GitHub Repository

1. User opens the Explore module.
2. User enters the project title, description, and GitHub repository URL.
3. User selects the project category (Technical or Non-Technical).
4. Repository information is stored in the **projects** collection.
5. The project appears under the user's **Mine** section.
6. Other users can browse the project through the **Others** section.

---

## Loading User Profile

1. User logs in.
2. Firebase Authentication provides the user's UID.
3. Application searches the **profileinfo** collection.
4. Profile data is displayed.

---

## Loading Explore Projects

1. User opens the Explore module.
2. Firestore retrieves documents from the **projects** collection.
3. The application filters repositories based on:
   - Mine or Others
   - Technical
   - Non-Technical
4. Matching repositories are displayed with their title, description, owner email, and GitHub repository link.

---

## Sending Collaboration Messages

1. User writes a message.
2. Message is stored in Firestore.
3. Firestore real-time listener detects changes.
4. Messages update automatically for connected users.

---

# Design Decisions

## Firebase Authentication

Chosen because:

- Easy integration with frontend applications.
- Secure user authentication.
- Provides authentication state management.

---

## Firebase Firestore

Chosen because:

- Real-time database updates.
- Flexible document-based structure.
- Easy integration with Firebase Authentication.
- Stores profiles, repositories, explore projects, and collaboration messages.

---

## Supabase Storage

Chosen because:

- Suitable for file storage.
- Provides public file URLs.
- Separates large file storage from database records.

---

# Current Limitations

- Explore projects currently support only GitHub repository links.
- Filtering is limited to Technical and Non-Technical categories.
- Search functionality is not implemented.
- Projects cannot currently receive comments or ratings.
- Team-based project management is not available.
- Collaboration currently focuses on discussion channels.

---

# Future Architecture Improvements

Future versions can include:

- Project search and filtering by title or technology.
- Technology-specific tags.
- Public project discovery without login.
- Comments and ratings for projects.
- Likes and bookmarking.
- Team-managed repositories.
- Rich project pages with screenshots, videos, and live demo links.
- Project analytics and engagement statistics.
- Notifications for collaboration and project updates.
