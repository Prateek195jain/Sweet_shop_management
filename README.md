
# Sweet Shop Management System

A full-stack Sweet Shop Management System built using Spring Boot, MongoDB, React, and Tailwind CSS.  
The application supports role-based authentication, inventory management, and a modern responsive user interface.

This project was developed following clean coding practices, RESTful API design, and modern development workflows.

---

## Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Security (JWT Authentication)
- MongoDB (Atlas)
- Maven

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- JWT Decode

---

## Architecture

The backend follows the Controller–Service–Repository architecture:

- Controller: Handles HTTP requests and responses  
- Service: Contains business logic  
- Repository: Interacts with MongoDB  

The frontend is implemented as a Single Page Application (SPA) with reusable components and role-based rendering.

---

## Features

### Authentication and Authorization
- User registration and login
- JWT-based authentication
- Role-based access control (USER and ADMIN)

### Sweet Management
- View all available sweets
- Search sweets by name
- Purchase sweets with automatic inventory updates

### Inventory Management (Admin Only)
- Add new sweets
- Update sweet details
- Delete sweets
- Restock sweets

### User Interface
- Responsive dashboard
- Role-based UI rendering
- Disabled actions for out-of-stock items
- Clean and modern design using Tailwind CSS

---

## Security

- Passwords are encrypted using BCrypt
- JWT tokens are used for secure authentication
- Backend strictly enforces role-based authorization
- Frontend conditionally renders UI based on user role

---

## How to Run the Project

### Backend

```bash
cd backend
mvn spring-boot:run
````

The backend server runs on:

```
http://localhost:8080
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend application runs on:

```
http://localhost:5173
```

Make sure the backend server is running before starting the frontend, as the frontend communicates with the backend REST APIs.

---

## API Overview

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

### Sweets

* GET `/api/sweets`
* GET `/api/sweets/search`
* POST `/api/sweets` (ADMIN)
* PUT `/api/sweets/{id}` (ADMIN)
* DELETE `/api/sweets/{id}` (ADMIN)

### Inventory

* POST `/api/sweets/{id}/purchase`
* POST `/api/sweets/{id}/restock` (ADMIN)

---

## Frontend Routes

### Public Routes

* `/login` – User login page
* `/register` – User registration page

### Protected Routes

* `/dashboard` – Dashboard displaying sweets and inventory actions

### Role-Based UI Behavior

* USER

  * View sweets
  * Search sweets
  * Purchase sweets
* ADMIN

  * All USER features
  * Add new sweets
  * Update sweet details
  * Delete sweets
  * Restock inventory

---




