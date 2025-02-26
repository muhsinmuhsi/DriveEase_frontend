# 🚗 DriveEase - Car Rental Web Application

Welcome to **DriveEase**, a modern and user-friendly car rental platform designed to make renting vehicles seamless and hassle-free. Built with the **MERN stack (MongoDB, Express, React, Node.js)**, DriveEase offers a smooth booking experience for users while providing a powerful admin dashboard for managing bookings and fleet operations.

## 🚀 Features

### 🔹 User Features
- 🚘 Browse available cars with filters (brand, price, availability, etc.).
- 📅 Book cars with a flexible pickup and drop-off schedule.
- 💰 Secure online payments for hassle-free transactions.
- 📝 View and manage booking history.
- ⭐ Leave reviews and ratings for rented vehicles.
- 🤖 AI-based car suggestions tailored to user preferences.

### 🔹 Admin Features
- 📊 Dashboard for monitoring bookings and revenue.
- 🚗 Manage car listings (add, edit, delete vehicles).
- 🔄 Approve or reject rental requests.
- 📉 View analytics on user engagement and revenue growth.

## 🛠️ Tech Stack

| Technology | Description |
|------------|------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ORM) |
| **Authentication** | JWT (JSON Web Token) |
| **Payment Gateway** | Razorpay |
| **State Management** | Redux Toolkit |
| **Deployment** |  Vercel |

## 📸 Screenshots
![Screenshot (209)](https://github.com/user-attachments/assets/8683bbe9-8e13-4c30-b895-e4420a79f087)

## ⚡ Getting Started

### 🔧 Prerequisites
- Node.js (v16+)
- MongoDB (Local or Atlas)
- A Razorpay account (for payment integration)

### 🔹 Installation
```sh
# Clone the repository
git clone https://github.com/yourusername/driveease.git
cd driveease
```

#### 📌 Backend Setup
```sh
cd server
npm install
npm run dev
```

#### 📌 Frontend Setup
```sh
cd client
npm install
npm run dev
```

## 🌍 Environment Variables
Create a `.env` file in the `server` folder and add:
```
PORT=8080
MONGO_URI=your mongo db url
EMAIL_PASS=email password
EMAIL_USER=email for google authentication
JWT_SECRET=jwt secret
JWT_EXPIRE_IN=90d
JWT_COOKIE_EXPIRE_IN=90
CLIENT_ID=64442170894-google client id
CLIENT_SECRET=google client secret 
ADMIN_EMAIL=admin email
ADMIN_PASSWORD=add admin password for admin login
ADMIN_SECRET=create admin secret for jwt authentication
Cloud_name=cloudnary name
Cloud_API_key=cloudnary key
Cloud_API_secret= your cloudnary secret 
Razorpay_key_id=rezorpay key id
Razorpay_key_secret=your razorpay key secret

```

## 🚀 Deployment
You can deploy DriveEase on AWS, Vercel, or Render for production.

## 👨‍💻 Contributing
We welcome contributions! Feel free to submit pull requests or report issues.

## 📄 License
MIT License © 2025 [Your Name](https://github.com/yourusername)

## 🌟 Show Your Support
If you like this project, please ⭐ star the repository!

---

🚀 **DriveEase - Making Car Rentals Easier & Smarter!**

