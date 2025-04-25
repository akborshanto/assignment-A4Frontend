# 🚴 Bicycle Store - Full Stack Application

Live Site: [Visit Bicycle Store 🚴](https://frontend4-beta.vercel.app/)

## 📌 Project Overview

The **Bicycle Store** is a fully responsive e-commerce web application built to provide a seamless online bicycle shopping experience. It includes secure user authentication, role-based dashboards, and complete product and order management.

---

## ✨ Features

### 🔐 User Authentication
- JWT-based secure login and registration.
- Role-based access (`customer`, `admin`).
- Passwords hashed and stored securely.
- Logout clears session (token removed from local storage).

### 🌐 Public Pages
- **Home Page** with navbar, banner, featured bicycles, testimonial section, and footer.
- **All Bicycles Page** with:
  - Search by brand, model, or category.
  - Filtering by price, availability, and more.
- **Bicycle Details Page** with full product info and "Buy Now" option.
- **About Page** with shop overview and mission.

### 🔒 Private Pages
- **Checkout Page** (only for logged-in users):
  - Real-time stock checking.
  - Order form with user and product details.
  - Total calculation.
  - Payment integration (SurjoPay, Stripe, or others).
- **Role-Based Dashboard**:
  - `Admin`:
    - Manage Users (Deactivate)
    - Manage Bicycles (CRUD)
    - Manage Orders (CRUD)
  - `Customer`:
    - View Orders
    - Manage Profile
    - Change Password

---

## 🖼 UI/UX Design

- Fully responsive layout for mobile, tablet, and desktop.
- Toast notifications for all actions (e.g., login success, order placed).
- Friendly error messages for:
  - Duplicate emails
  - Login issues
  - Failed orders (e.g., out-of-stock)
- Loading spinners during data fetch/login.

---

## 📊 Optional Features (Implemented / Extendable)

- **Bicycle Comparison Tool**: Compare up to 3 bikes side by side.
- **Sales Dashboard** (Admin):
  - Sales revenue overview
  - Units sold
  - Top-selling bikes
  - Visual charts (bar, pie, line)

---

## 🛠️ Tech Stack

### 🔷 Frontend
- React.js (with Hooks & Context)
- React Router DOM
- Tailwind CSS
- Axios
- JWT Auth

### 🔶 Backend (MERN Stack)
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Bcrypt (for password hashing)
- Stripe / SurjoPay for payments

---

## 🗃️ Database Models

### User
```js
