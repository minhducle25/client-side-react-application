# 🌋 Volcano Explorer

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Redux-5.0.0-764ABC?style=for-the-badge&logo=redux" alt="Redux" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status" />
</div>

<br />

**Volcano Explorer** is a comprehensive, interactive web application that allows users to discover, visualize, and learn about volcanoes across the globe. Seamlessly integrating interactive maps, detailed data tables, and dynamic charts for population density analysis, this platform is designed for both enthusiasts and researchers. 

Explore global volcanic data, create an account to view advanced metrics, and share your own reviews and ratings!

---

## ✨ Key Features

- 🗺️ **Interactive Geographic Map**: Visualize the exact location and topography of volcanoes using `pigeon-maps`.
- 📊 **Dynamic Data Tables**: Browse and filter volcanoes smoothly with `ag-grid-react` integration.
- 📈 **Population Analytics**: View population density surrounding volcanic regions through engaging bar charts powered by `chart.js`.
- 🔐 **Secure Authentication**: Register and log in using robust JWT (JSON Web Token) authentication to access personalized features.
- ⭐ **Community Ratings & Comments**: Authorized users can rate volcanoes and leave comments, fostering a community-driven database.
- 📱 **Fully Responsive UI**: A mobile-first, heavily stylized interface built using **Tailwind CSS** for a premium user experience on any device.

---

## 🛠 Tech Stack

### Frontend Architecture
- **Framework**: React 18
- **State Management**: Redux & Redux Thunk (Async actions)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6)
- **Data Grids**: AG Grid Community
- **Data Visualization**: Chart.js (`react-chartjs-2`)
- **Mapping**: Pigeon Maps
- **HTTP Client**: Axios

### Backend Dependencies (Server-Side)
- **Runtime Environment**: Node.js & Express.js
- **Database**: MySQL (accessed via Knex.js query builder)
- **Authentication**: JWT (JSON Web Tokens) & bcrypt (password hashing)
- **Environment Management**: dotenv

---

## 📂 Project Structure Overview

```text
m:\volcano-front-end\
├── client-side-react-application/   # ⚛️ React Frontend Application
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── assets/                  # Images and static media
│   │   ├── axios/                   # Axios interceptors and global API URLs
│   │   ├── components/              # Reusable UI React components (Tables, Charts, Maps, Nav)
│   │   ├── pages/                   # Main route components (Home, Volcano List, Detail, Auth)
│   │   ├── redux/                   # Redux store configuration and root reducers
│   │   └── index.js / App.js        # React bootstrap and routing configuration
│   └── package.json                 # Frontend dependencies and scripts
│
└── assessment3/                     # ⚙️ Node.js/Express Backend API Layer
    ├── bin/www                      # Server initialization and port configuration
    ├── routes/                      # Express routes (Auth, Volcanoes, Comments, Profile)
    ├── package.json                 # Backend dependencies
    ├── knexfile.js                  # Database connection configuration
    └── .env                         # Environment variables (DB credentials, JWT Secret)
```

---

## 📦 Installation and Setup

To run this full-stack application locally, you will need to start both the backend server and the frontend client.

### Prerequisites
- Node.js (v16 or higher)
- MySQL local instance running

### 1️⃣ Starting the Backend Server
First, navigate to the backend directory and configure your environment:

```bash
cd assessment3

# Install dependencies
npm install

# Create/Edit the .env file with your local MySQL credentials:
# PORT=3001
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=volcanoes
# DB_USER=root
# DB_PASSWORD=your_password
# JWT_SECRET=your_secure_random_string

# Start the server (defaults to port 3001 to prevent conflicts)
npm start
```

### 2️⃣ Starting the React Frontend
Open a new terminal window, navigate to the frontend directory, and start the app:

```bash
cd client-side-react-application

# Install frontend dependencies
npm install

# Start the development server
npm start
```

The application will automatically launch in your default browser at `http://localhost:3000`.

---

## 🌎 API Endpoints (Backend)

The backend provides several RESTful endpoints. *Note: Endpoints requiring `[Auth]` dictate that a valid `Bearer Token` must be passed in the headers.*

- `GET /volcanoes` - Retrieve a filtered list of volcanoes by country/radius.
- `GET /volcano/:id` - Fetch detailed data mapping to a specific volcano. *(Provides population data if [Auth] is present).*
- `POST /user/register` - Create a new user account.
- `POST /user/login` - Authenticate an existing user and return a JWT.
- `GET /user/:email/profile` - [Auth] Retrieve user profile details.
- `POST /volcanoes/:id/comments` - [Auth] Post a review/rating.
- `GET /volcanoes/:id/comments` - Retrieve public comments for a volcano.

---

## 🔮 Future Improvements

We are continuously working to improve the Volcano Explorer! Planned updates include:
- **Dark Mode Support**: Deep native integration leveraging Tailwind CSS dark variants.
- **Enhanced Filtering**: Complex search combinations filtering by volcano type, last eruption date, and exact elevation.
- **User Dashboards**: A personalized page to track user's highly rated and "saved" favorite geological locations.
- **OAuth Integration**: Simplified secure login via Google and GitHub.

---

## 🤝 Contributing

Contributions make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<br />

<div align="center">
  <b>Built with passion and curiosity for our rumbling Earth. 🌍🔥</b>
</div>
