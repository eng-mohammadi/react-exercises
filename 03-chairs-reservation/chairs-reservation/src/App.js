import React, { useEffect, useMemo, useReducer } from "react";
import axios from "axios";
import "./styles/main-styles.scss";
import Stage from "./components/Stage";
import ShowCountAndSum from "./components/ShowCountAndSum";
import Chairs from "./components/Chairs";
import { DataContext } from "./context/DataContext";
import { initialState, reducer } from "./reducers/chairsReducer";

const App = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("/chairs.json")
      .then((response) =>
        dispatch({ type: "fetch_success", chairsInfo: response.data }),
      )
      .catch((error) =>
        dispatch({ type: "fetch_failure", error: error.message }),
      );
  }, []);

  const contextValue = useMemo(() => ({ data, dispatch }), [data]);

  return (
    <React.Fragment>
      <Stage />
      <DataContext.Provider value={contextValue}>
        <ShowCountAndSum />
        <Chairs />
      </DataContext.Provider>
    </React.Fragment>
  );
};

export default App;
