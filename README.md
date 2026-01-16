# 🛒 E-Commerce Platform

A full-stack **E-Commerce Platform** built with **React (Vite) frontend**, **Node.js/Express backend**, and **MongoDB** database. Includes a complete **Admin Panel** to manage products, images, messages, and orders.

---

## 📌 Features

### Frontend
- Fully responsive React UI with **Vite**
- Product listing, categories, cart
- User-friendly contact form
- Integration with backend API

### Backend
- Node.js + Express REST API
- MongoDB database for products, orders, contacts
- Contact form API with email notifications using **nodemailer**
- Admin authentication (JWT ready)

### Admin Panel
- Login & dashboard
- Add / update / delete **products and images**
- View user **messages and contact submissions**
- Manage **orders**
- Single-page app routing with React Router / HashRouter
- Connected to backend APIs

---

## 🛠️ Tech Stack

| Layer         | Technology / Library |
|---------------|-------------------|
| Frontend      | React, Vite, TailwindCSS |
| Backend       | Node.js, Express |
| Database      | MongoDB, Mongoose |
| Email         | Nodemailer |
| Security      | Helmet, CORS, rate-limiter |
| Deployment    | Render.com |

---

## 🔗 GitHub Repository

[https://github.com/naimehossen/E-Commerce-Platform](https://github.com/naimehossen/E-Commerce-Platform)

---

## 🚀 Live Demo

- **Frontend:** [Protflow Website](https://e-commerce-platform1-1s14.onrender.com/)  
- **Admin Panel:** [Admin Panel](https://admin-k2sp.onrender.com/)  

> ⚠️ Blank pages on `/add` or other routes may occur due to React routing. See Deployment Notes below.

---

## 📂 Project Structure

e-commerce-platform/
├─ backend/
│ ├─ controllers/
│ ├─ models/
│ ├─ routes/
│ ├─ middleware/
│ └─ server.js
├─ frontend/
│ ├─ src/
│ │ ├─ components/
│ │ ├─ pages/
│ │ └─ App.jsx
│ └─ vite.config.js
└─ admin/
├─ src/
│ ├─ components/
│ ├─ pages/
│ └─ App.jsx
└─ vite.config.js


---

## ⚡ Backend Setup

1. Navigate to backend folder:

```bash
cd backend
npm install
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
EMAIL_USER=<your_email>
EMAIL_PASS=<your_email_password>
ADMIN_EMAIL=<admin_email_for_notifications>
ADMIN_PANEL_URL=<admin_panel_url>
npm start
