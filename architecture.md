# ProjectSphere Architecture Document

## Overview

ProjectSphere follows a client-side web application architecture where the frontend communicates with cloud-based services for authentication, database operations, and file storage.

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
        --------------------------------
        |                              |
        |                              |
 Firebase Services              Supabase Storage
        |                              |
        |                              |
 Authentication                 Project Files
 Firestore Database             (PDF Documents)

```

---

# 1. Frontend Layer

The frontend is developed using:

* HTML
* CSS
* JavaScript ES Modules

The frontend is responsible for:

* User interface.
* User interactions.
* Sending and receiving data.
* Displaying projects and profiles.

Main modules:

## Authentication Module

Handles:

* User login.
* User registration.
* Authentication state checking.

## Profile Module

Handles:

* Displaying user information.
* Updating profile details.
* Loading profile images.

## Repository Module

Handles:

* Creating projects.
* Uploading project documentation.
* Displaying uploaded projects.
* Deleting projects.

## Collaboration Module

Handles:

* Real-time discussions.
* Category-based conversations.
* Sending and displaying messages.

---

# 2. Firebase Services

Firebase is used as the backend service for authentication and database operations.

## Firebase Authentication

Purpose:

* Manage user accounts.
* Verify logged-in users.
* Protect application pages.

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
 |-- degree
 |-- year
 |-- imageURL
```

---

### repositories

Stores project information.

Example:

```
repositories
 |
 |-- title
 |-- description
 |-- ownerUid
 |-- ownerEmail
 |-- pdfURL
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
4. Supabase returns a file URL.
5. Project details and file URL are stored in Firestore.
6. Project becomes available in the user's repository.

---

## Loading User Profile

1. User logs in.
2. Firebase Authentication provides user UID.
3. Application searches Firestore profileinfo collection.
4. Profile data is displayed.

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

* Easy integration with frontend applications.
* Secure user authentication.
* Provides authentication state management.

---

## Firebase Firestore

Chosen because:

* Real-time database updates.
* Flexible document-based structure.
* Easy integration with Firebase Authentication.

---

## Supabase Storage

Chosen because:

* Suitable for file storage.
* Provides public file URLs.
* Separates large file storage from database records.

---

# Current Limitations

* Projects are currently organized mainly by ownership.
* Search and filtering are not implemented yet.
* Team-based project management is not available.
* Collaboration currently focuses on discussions.

---

# Future Architecture Improvements

Future versions can include:

* Dedicated backend API.
* Search indexing system.
* Project recommendation engine.
* Team permission management.
* Project analytics service.
