# ⚛️ React Exercises

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-RTK_Query-764ABC?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-6-DB7093?logo=styledcomponents&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-SCSS-CC6699?logo=sass&logoColor=white)

Four hands-on React exercises I built while learning React, each one in its own folder with its own README. They move step by step from class components and props to hooks, routing and global state management with Redux Toolkit.

The final, complete project of the course (a hotel booking app) lives in [its own repository](#-final-project) and is linked at the end of this page.

## 📚 Exercises

| #   | Exercise                                            | Focus                                                            | Main tools                                          |
| --- | --------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------- |
| 01  | [Foods & Accordion](./01-foods-accordion)           | Class components, state and props, conditional rendering, lists  | React, styled-components, SCSS                      |
| 02  | [Movies Router Site](./02-movies-router)            | Client-side routing, fetching JSON data, search and genre filter | React Router, axios, styled-components, SCSS        |
| 03  | [Chairs Reservation](./03-chairs-reservation)       | Hooks, a reducer for shared state, the Context API               | `useReducer`, `useContext`, `useEffect`, axios      |
| 04  | [University Management](./04-university-management) | CRUD with a fake REST API, caching and tag invalidation          | Redux Toolkit, RTK Query, json-server, React Router |

## 🧭 Learning path

1. **Components, state and props** (01): building UI from class components and passing data down.
2. **Routing and data fetching** (02): multiple pages, loading data, and deriving the visible list from state.
3. **Hooks and shared state** (03): moving state logic into a reducer and sharing it with Context.
4. **Global state with Redux Toolkit** (04): one API slice, generated hooks, and automatic refetching after changes.

## 🗂️ Repository structure

Every exercise has the same two-level layout: a numbered folder that holds the exercise (with its README), and the project folder inside it.

```
react-exercises/
├── 01-foods-accordion/
│   └── foods-accordion/
├── 02-movies-router/
│   └── movies-router/
├── 03-chairs-reservation/
│   └── chairs-reservation/
├── 04-university-management/
│   └── university-management/
└── README.md
```

## 🚀 Running an exercise

Each exercise is an independent Create React App project:

```bash
cd 01-foods-accordion/foods-accordion   # or any other exercise folder
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

Exercise 04 also needs its fake API running in a second terminal:

```bash
npm run api
```

See each exercise's README for details.

## 🏁 Final project

The last exercise of the course is a complete **hotel booking application**: a dynamic app that talks to a server set up with json-server. It is bigger than the small exercises above, so it has its own repository:

👉 **[Hotel Booking App](https://github.com/eng-mohammadi/hotel-reservation-react-app)**
