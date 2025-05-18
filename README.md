# MERN Product Store

A full-stack product management application built with the **MERN stack**, styled with **Chakra UI**, and powered by **Zustand** for global state management.

## 🌐 Live Demo

This project is already deployed and available at: https://mern-project-product-store-2gus.onrender.com/

---

## 🧰 Tech Stack

- **Frontend:** React, Chakra UI
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas)
- **State Management:** Zustand

---

## ⚙️ Features

- 📱 **Fully responsive** (mobile-friendly) layout using Chakra UI.
- 🔄 **Real-time UI updates** for product creation, editing, and deletion via Zustand.
- 🎨 **Dark/Light theme toggle** from the navbar using Chakra UI’s theme system.
- 📦 **Homepage** that displays all products stored in MongoDB.
- ➕ **Create page** with inputs for:
  - Product Name
  - Price
  - Image URL
- ✅ **Toast notification** confirms successful product creation/deletion.

---

## 🧭 Navigation

- **Navbar**:
  - Plus button → opens the product creation form.
  - "Product Store" button → returns to the homepage.
  - Theme toggle → switches between dark and light mode.

---

## 🛠️ Getting Started

1. **Clone the repository**
    
   Open a terminal and run:
   ```bash
   git clone https://github.com/daliaBedrosyan/MERN-project-product-store.git
   
3. **Navigate to the project folder**
   
   `cd MERN-project-product-store`

4. **Set up MongoDB** 
   
    Create a free MongoDB Atlas database online (https://www.mongodb.com/cloud/atlas) or run a local MongoDB server.

    Create a `.env` file in the root of the project and add the following line:

    MONGO_URI=your_mongodb_connection_string_here

    PORT=8000
    
    ***Make sure to replace `your_mongodb_connection_string_here` with your actual connection string from MongoDB Atlas or your local MongoDB instance.***


5. **Build and start the app:**
   
   In the root of the project run:
   
   `npm run build`

   `npm run start`

7. **Click the following URL in your browser:**
   http://localhost:8000






