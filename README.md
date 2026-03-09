 # CareerFlow — Job Application Tracker

CareerFlow is a modern job application tracking platform that helps users organize and manage their job search through a visual workflow. The application allows users to add, edit, delete, and track job opportunities as they move through different stages of the hiring process.

The platform uses a pipeline to manage job applications across stages such as Applied, Interview, Offer, and Rejected.

CareerFlow was built using React and Firebase to provide a fast, responsive interface with persistent cloud storage.

---

## Project Rename

This project was originally developed under the working name **Job Application Tracker** during early development. As the design and feature set evolved, the project was renamed to **CareerFlow** to better represent its purpose of managing the flow of career opportunities through the hiring process.

---

## Features

### User Authentication
Users can create an account or log in using Firebase Authentication. Logged-in users have their job applications securely saved to the cloud.

### Add Job Applications
Users can create new applications with the following information:

- Company (required)
- Role (required)
- Location (optional)
- Salary (optional)
- Job link (optional)
- Notes (optional)

### Drag-and-Drop Application Pipeline
Applications are displayed as cards that can be dragged between workflow stages:

- Applied
- Interview
- Offer
- Rejected

This provides a visual way to manage the hiring process.

### Edit Applications
Users can update application details at any time through the edit panel.

### Delete Applications
Applications can be removed instantly and are also deleted from Firebase when logged in.

### Persistent Storage
When a user is logged in, applications are stored in **Firebase Firestore** and automatically reload when the user returns.

If the user is not logged in, applications are stored temporarily and will disappear when the page refreshes.

### Company Logo Detection
CareerFlow automatically loads company logos using the Clearbit Logo API when a job link is provided.

### Dashboard Statistics
The dashboard provides quick statistics including:

- Total applications
- Interviews
- Offers
- Rejections

This allows users to track their job search progress.

---

## Tech Stack

Frontend
- React
- Vite
- CSS (Glassmorphism UI design)

Backend / Services
- Firebase Authentication
- Firebase Firestore Database

Libraries
- DnD Kit (Drag and Drop system)
- Clearbit Logo API

---

## How It Works

1. The user creates an account or logs in.
2. The user adds job applications using the application form.
3. Each job appears as a card in the workflow board.
4. Cards can be dragged between stages to update application status.
5. Users can edit or delete applications as needed.
6. When logged in, all data is stored in Firebase Firestore.

---

## Installation

Clone the repository
