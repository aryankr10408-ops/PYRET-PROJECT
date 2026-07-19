ProjectSphere Architecture Document
Overview

ProjectSphere follows a client-side web application architecture where the frontend communicates with cloud-based services for authentication, database operations, real-time communication, and file storage.

The system is divided into four major components:

Frontend Application
Firebase Authentication
Firebase Firestore Database
Supabase Storage
System Architecture
                           User
                             |
                             |
                  Frontend Application
                (HTML / CSS / JavaScript)
                             |
      -------------------------------------------------
      |                     |                         |
      |                     |                         |
Firebase Authentication   Firestore Database   Supabase Storage
      |                     |                         |
 User Authentication   Profiles, Projects,       Project Files
 Session Management    Repositories & Chats      (PDF Documents)
1. Frontend Layer

The frontend is developed using:

HTML5
CSS3
JavaScript (ES Modules)

The frontend is responsible for:

User interface rendering
User interactions
Sending and receiving data
Displaying profiles and projects
Managing navigation between modules
Main Modules
Authentication Module

Handles:

User registration
User login
Authentication state management
Route protection
Profile Module

Handles:

Creating user profiles
Updating profile information
Displaying profile images
Loading user information after login
Repository Module

Handles:

Creating project documentation entries
Uploading PDF documentation
Viewing uploaded projects
Deleting projects

Project files are uploaded to Supabase Storage while metadata is stored in Firestore.

Explore Module

The Explore module enables project discovery and GitHub repository sharing.

Responsibilities:

Create GitHub project entries
Store repository title and description
Save GitHub repository URLs
Categorize projects as Technical or Non-Technical
Display the current user's repositories (Mine)
Display repositories uploaded by other users (Others)
Filter projects using category-based filters
Open GitHub repositories directly from the application
Collaboration Module

Handles:

Real-time discussions
Technical discussion channel
Non-technical discussion channel
Sending and displaying messages
Automatic synchronization using Firestore listeners
2. Firebase Services

Firebase is used for authentication and database management.

Firebase Authentication
Purpose
Manage user accounts
Verify authenticated users
Protect application pages
Maintain login sessions
Workflow
User Login
      |
Firebase Authentication
      |
Authentication State Check
      |
Access Dashboard
Firebase Firestore

Firestore stores structured application data.

profileinfo Collection

Stores student profile information.

Example:

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
repositories Collection

Stores uploaded project documentation metadata.

Example:

repositories
 |
 |-- title
 |-- description
 |-- ownerUid
 |-- ownerEmail
 |-- pdfURL
 |-- publicId
 |-- createdAt
projects Collection

Stores GitHub repositories shared through the Explore module.

Example:

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
chats Collection

Stores collaboration messages.

Example:

chats
 |
 |-- uid
 |-- username
 |-- written_material
 |-- category
 |-- createdAt
3. Supabase Storage

Supabase Storage is used for storing project documentation files.

Workflow
User Selects PDF
        |
Repository Module
        |
Supabase Storage Upload
        |
Public File URL Generated
        |
URL Stored in Firestore

Only file metadata is stored in Firestore, while the actual documents remain in Supabase Storage.

Data Flow
Uploading Project Documentation
User enters project information.
User selects a PDF documentation file.
The file is uploaded to Supabase Storage.
Supabase generates a public file URL.
Project metadata and the file URL are stored in the repositories collection.
The project appears in the user's repository.
Publishing a GitHub Repository
User opens the Explore module.
User selects Add.
User enters:
Project title
Description
GitHub repository URL
Technical or Non-Technical category
Project information is stored in the projects collection.
The repository becomes visible under Mine.
Other users can discover it through the Others section.
Loading User Profile
User logs in.
Firebase Authentication provides the user's UID.
Firestore searches the profileinfo collection.
Profile information is displayed.
Loading Explore Projects
User opens the Explore module.
Firestore retrieves documents from the projects collection.
Projects are filtered based on:
Mine / Others
Technical
Non-Technical
Matching repositories are displayed with their GitHub links.
Sending Collaboration Messages
User writes a message.
The message is stored in the chats collection.
Firestore's real-time listener detects changes.
Connected users receive updates instantly.
Design Decisions
Firebase Authentication

Chosen because:

Simple integration with frontend applications
Secure authentication
Built-in session management
Reliable authentication state handling
Firebase Firestore

Chosen because:

Real-time synchronization
Flexible document-based data model
Easy integration with Firebase Authentication
Suitable for user profiles, repositories, explore projects, and chats
Supabase Storage

Chosen because:

Efficient cloud file storage
Public file URL generation
Good support for large document uploads
Keeps file storage separate from structured database records
Current Limitations
Explore projects currently support only GitHub repository links.
Project search by title or technology is not yet available.
Explore filtering is limited to Technical and Non-Technical categories.
Repository popularity metrics are not implemented.
Team-based project management is not available.
Collaboration currently focuses on text-based discussions.
Future Architecture Improvements

Future versions can include:
Advanced project search and filtering.
Technology tags and category management.
Public project discovery without authentication.
Project comments, ratings, and bookmarks.
Team collaboration with multiple project owners.
Rich project pages supporting images, videos, and live demos.
Repository analytics (views, stars, downloads, and engagement statistics).
Notification system for collaboration and project updates.
Backend API layer for improved scalability and security.
