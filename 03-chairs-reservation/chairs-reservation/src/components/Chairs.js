import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const SECTIONS = ["B", "A", "C", "D"];

const Chairs = () => {
  const { data, dispatch } = useContext(DataContext);
  const { chairs, loading, errorMessage } = data;

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (errorMessage) {
    return <h2>Error: {errorMessage}</h2>;
  }

  return (
    <React.Fragment>
      <div className="chairs-list">
        {SECTIONS.map((section) => (
          <div className="chair-section" key={section}>
            <h3>Section {section}</h3>
            {chairs
              .filter((chair) => chair.section === section)
              .map((chair) => (
                <button
                  key={chair.number}
                  type="button"
                  title={`Price: ${chair.price.toLocaleString("en-US")} تومان`}
                  className={chair.state}
                  onClick={() => {
                    if (chair.state === "reserved") {
                      window.alert("قبلاً رزرو شده است");
                      return;
                    }
                    dispatch({ type: "toggle_chair", number: chair.number });
                  }}
                >
                  {chair.number}
                </button>
              ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Chairs;
