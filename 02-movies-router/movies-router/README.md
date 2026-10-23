# 🎬 Movies Router Site

A small multi-page movie site built with **React**, **React Router**, **axios**, **styled-components** and **SCSS**.

This is **Exercise 2** in my React course exercises. The goal of the exercise was to practice client-side routing and loading data from a JSON file, using class components (the approach taught at this stage of the course).

## ✨ Features

- **Three pages** with client-side routing: Home, Movies and About Us
- **Image slider** on the Home page with Previous / Next controls and a fade-in animation
- **Movies page** that loads its data from `public/data.json` with axios
- **Live search** by movie title
- **Genre filter** built automatically from the data; click a genre again to clear it
- Search and genre filter **work together**, and an empty result shows a "No movies found." message
- Error message if the movies file cannot be loaded

## 🛠️ Tech stack

| Area          | Tools                                                          |
| ------------- | -------------------------------------------------------------- |
| UI            | React 19 (class components, `setState` with updater functions) |
| Routing       | React Router v7 (`BrowserRouter`, `Routes`, `Route`, `Link`)   |
| Data fetching | axios                                                          |
| Styling       | SCSS (nesting) and styled-components (props and keyframes)     |
| Tooling       | Create React App (`react-scripts` 5)                           |

## 🧠 What I practiced

- Setting up routes and navigation between pages without a page reload
- Fetching data in `componentDidMount` and handling request errors
- Keeping a **single source of truth** in state (`searchTerm`, `selectedGenre`) and deriving the visible list from it during render
- Styled-components with **transient props** (`$isActive`) so styling props are not passed to the DOM
- Reusable presentational components (`Movie`) that receive data through props
- SCSS nesting for page-level styles

## 🗂️ Project structure

```
movies-router/
├── public/
│   ├── data.json            # movies data
│   ├── images/movies/       # movie posters used by data.json
│   └── index.html
└── src/
    ├── App.js               # navbar and routes
    ├── index.js             # BrowserRouter setup
    ├── components/
    │   ├── Home.js          # image slider
    │   ├── Movies.js        # list, search and genre filter
    │   ├── Movie.js         # single movie card
    │   ├── AboutUs.js
    │   └── styled-components/
    │       └── SliderImageBox.js
    ├── images/              # slider images and about page pictures
    └── styles/
        └── main-styles.scss
```

Movie posters live in `public/images/movies` because they are referenced by path from `data.json` at runtime. The slider and about-page pictures live in `src/images` because they are imported by the components.

## 🚀 Getting started

```bash
cd 02-movies-router/movies-router
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
```

## 📌 Notes

- The movie data and posters come from the course material and are used here for learning purposes only.
- Class components are used on purpose because they were the topic of this stage of the course. Later exercises move on to other patterns.
