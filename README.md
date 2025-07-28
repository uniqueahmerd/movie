# Movie Recommendation App

This is a full-stack movie recommendation app with authentication, search, and related movies features.

## Features

- User authentication (login, signup, logout)
- Search for movies
- View movie details and related movies
- Responsive UI with Tailwind CSS
- JWT authentication with HTTP-only cookies

## Tech Stack

- Frontend: React (Vite, Tailwind CSS)
- Backend: Node.js, Express, MongoDB, TMDB API

## Setup

### Backend

1. `cd backend`
2. `npm install`
3. Create a `.env` file (see `.env.example`) with your MongoDB URI, JWT secret, and TMDB API key.
4. `npm start`

### Frontend

1. `cd frontend`
2. `npm install`
3. Create a `.env` file (see `.env.example`) with your backend URL.
4. `npm run dev`

## Running the Backend

```bash
cd backend
npm install
npm start
```

## Running the Frontend

```bash
cd frontend
npm install
npm start
```

## Notes

- Do not commit `.env` files. They are ignored by `.gitignore`.
- Make sure your backend is running before using the frontend.

## License

MIT
