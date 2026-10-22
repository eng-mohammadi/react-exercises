# 🎟️ Chairs Reservation

A seat reservation app built with **React hooks**: `useReducer`, `useContext` and `useEffect`.

This is **Exercise 3 of 6** in my React course exercises. The goal was to practice managing shared state with a reducer and the Context API, and to load data from a JSON file with axios.

## ✨ Features

- Seats are loaded from `public/chairs.json` (114 seats in 4 sections, with different prices)
- Each click moves a seat to the next state: **unselected → selected → temporary reservation → reserved**
- Seat colors show the state: green (selected), yellow (temporary reservation), red (reserved)
- A reserved seat cannot be changed again and shows an alert
- Live **count** and **total price** of the reserved seats
- The price of each seat is shown on hover
- Loading and error states while the data is fetched

## 🛠️ Tech stack

| Area          | Tools                                                            |
| ------------- | ---------------------------------------------------------------- |
| UI            | React 19 (function components)                                   |
| State         | `useReducer` and the Context API (`createContext`, `useContext`) |
| Side effects  | `useEffect`                                                      |
| Data fetching | axios                                                            |
| Styling       | SCSS                                                             |
| Tooling       | Create React App (`react-scripts` 5)                             |

## 🧠 What I practiced

- Moving state logic into a **reducer** with clear action types (`fetch_success`, `fetch_failure`, `toggle_chair`)
- Sharing state and `dispatch` with child components through **Context**, without prop drilling
- Memoizing the context value with `useMemo` so consumers re-render only when the data changes
- **Derived data:** the count and the total price are calculated from the seats instead of being stored in state, so they can never get out of sync
- Fetching data once on mount and handling loading and error states

## 🗂️ Project structure

```
chairs-reservation/
├── public/
│   ├── chairs.json              # seats data
│   └── index.html
└── src/
    ├── App.js                   # fetches data, provides the context
    ├── index.js
    ├── context/
    │   └── DataContext.js       # the context object
    ├── reducers/
    │   └── chairsReducer.js     # initial state, reducer and seat state flow
    ├── components/
    │   ├── Stage.js
    │   ├── ShowCountAndSum.js   # reserved count and total price
    │   └── Chairs.js            # sections and seat buttons
    └── styles/
        └── main-styles.scss
```

## 🚀 Getting started

```bash
cd 03-chairs-reservation/chairs-reservation
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
```

## 📌 Notes

- Prices are in Toman, and the seat data comes from the course material.
- The alert and the price unit are in Persian, as in the original exercise.
