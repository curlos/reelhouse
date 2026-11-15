# ReelHouse

<p align="center">
  <img src="/public/reelhouse_icon.svg" alt="ReelHouse Logo" width="80" height="80">
</p>

<p align="center">
  <strong>🎬 A Netflix-inspired movie & TV discovery app powered by TMDB</strong>
</p>

<p align="center">
  <a href="https://netflix-2-0-lac.vercel.app/">🚀 Live Demo</a>
  ·
  <a href="https://github.com/curlos/netflix-2.0/issues">🐛 Report Bug</a>
  ·
  <a href="https://github.com/curlos/netflix-2.0/issues">✨ Request Feature</a>
</p>

---

## 🌟 About The Project

ReelHouse is a responsive movie and TV discovery app with a vast collection of movies and TV shows powered by the TMDB API, with advanced filtering, sorting, and subscription management features.

## 📱 Screenshots

<div align="center">

### 🏠 Homepage
<div>
  <img src="https://github.com/user-attachments/assets/489804d7-0a75-4fb6-a6ec-2c0449655dd5" width="100%" />
</div>
<div>
  <img src="https://github.com/user-attachments/assets/9cc523fe-e7fb-45a4-8652-305074d3915d" width="100%" />
</div>

### 🎬 Movies
<img src="https://github.com/user-attachments/assets/b72f5b81-9b84-4ccc-ae79-9d7b24f02b3e" width="100%" />

### 📺 TV Shows
<img src="https://github.com/user-attachments/assets/a44bcb1e-21fa-44fe-a27b-4b55b524d2b9" width="100%" />

### 🎭 TV Show Details
<img src="https://github.com/user-attachments/assets/fdf379ce-8b62-4524-8f4a-d357167a49eb" width="100%" />

### 📹 TV Episode
<img src="https://github.com/user-attachments/assets/943c69c3-4410-4681-9822-d32176e9be75" width="100%" />

</div>

### ✨ Key Features

- **🎭 Extensive Content Library** - Thousands of movies and TV shows via TMDB API
- **🔍 Advanced Filtering** - Filter by genres, years, and multiple sorting options
- **👤 User Authentication** - Secure login/signup with Firebase Auth
- **💳 Subscription Management** - Three-tier plans (Basic, Standard, Premium) with Stripe integration
- **📱 Responsive Design** - Optimized for all device sizes
- **🎬 Media Details** - Comprehensive movie/TV show pages with trailers, cast, and recommendations
- **📺 TV Episode Viewing** - Full season navigation and episode details

### 🛠 Built With

**Frontend:**
- React 17 with modern hooks and patterns
- Redux Toolkit Query (RTK Query) for state management
- React Router for navigation
- Bootstrap & React Bootstrap for styling
- Firebase Authentication

**Backend:**
- Express.js server for Stripe webhook handling
- TMDB API integration for media content
- Stripe API for subscription management

**Deployment:**
- Vercel (Frontend & Serverless Functions)

## 🏗 Architecture

This is a full-stack web application featuring:
- **Frontend**: React SPA with Redux Toolkit Query for efficient data fetching and caching
- **Backend**: Express.js server handling Stripe webhooks and payment processing
- **Database**: Firebase for user authentication and management
- **External APIs**: TMDB for movie/TV data, Stripe for payments
- **Deployment**: Vercel for both frontend hosting and serverless backend functions

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
