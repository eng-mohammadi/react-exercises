# 🎓 University Management

A university management app with pages for **students**, **professors**, **courses** and **unit selection**. The data lives on a fake REST API (**json-server**) and is managed on the client with **Redux Toolkit** and **RTK Query**.

This is **Exercise 4** in my React course exercises. The goal was to practice global data fetching and caching with RTK Query, routing, and building CRUD forms.

## ✨ Features

- **Students, professors and courses:** list, add and delete records
- **Unit selection:** a student signs in with first and last name, picks courses from the list, and removes them again
- **20-unit limit** per student, and a course cannot be picked twice
- The selected courses are stored **per student**
- Loading and error states on every page
- Right-to-left Persian interface

## 🛠️ Tech stack

| Area           | Tools                                                                           |
| -------------- | ------------------------------------------------------------------------------- |
| UI             | React 19 (function components and hooks)                                        |
| State and data | Redux Toolkit, **RTK Query** (`createApi`, `injectEndpoints`, tag invalidation) |
| Routing        | React Router v7                                                                 |
| Fake API       | json-server (`API/db.json`)                                                     |
| Styling        | SCSS                                                                            |
| Icons          | Font Awesome                                                                    |
| Tooling        | Create React App (`react-scripts` 5)                                            |

## 🧠 What I practiced

- A single RTK Query **API slice** with endpoints injected per resource (`students`, `professors`, `courses`, `selectUnits`)
- **Cache invalidation with tags:** adding or deleting a record refreshes the matching list automatically
- Using the generated hooks (`useGetStudentsQuery`, `useAddStudentMutation`, ...) with loading and error states
- Controlled forms with `useState` and converting form values to numbers before sending them
- Sharing data between pages: the unit selection page reads students, courses and selections together
- Reading RTK Query errors correctly (`status`, `data` and `error` instead of `message`)

## 🗂️ Project structure

```
university-management/
├── API/
│   └── db.json                      # json-server data
├── public/
└── src/
    ├── App.js                       # routes
    ├── index.js                     # Provider and BrowserRouter
    ├── components/
    │   ├── NavbarMenu.js
    │   ├── Home.js
    │   ├── StudentManagement.js
    │   ├── ProfessorManagement.js
    │   ├── CourseManagement.js
    │   └── UnitSelection.js
    ├── redux/
    │   ├── store.js
    │   └── services/
    │       ├── api.js               # base RTK Query API slice
    │       ├── studentsApi.js
    │       ├── professorsApi.js
    │       ├── coursesApi.js
    │       └── selectUnitsApi.js
    ├── utils/
    │   └── getErrorMessage.js
    └── styles/
        └── main_styles.scss
```

## 🚀 Getting started

```bash
cd 04-university-management/university-management
npm install
```

The app needs two processes, so use two terminals.

**Terminal 1: the fake API** (runs on port 3032)

```bash
npm run api
```

**Terminal 2: the React app**

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

The API address can be changed with the `REACT_APP_API_URL` environment variable (default: `http://localhost:3032`).

## 📌 Notes

- All people and course data in `API/db.json` is sample data.
- The interface text is Persian (right-to-left), as in the original exercise.
- Icons come from a Font Awesome kit loaded in `public/index.html`.
