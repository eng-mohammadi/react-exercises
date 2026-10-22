import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ShowCountAndSum = () => {
  const { data } = useContext(DataContext);

  // Count and sum are derived from the chairs, so they are not stored in state
  const reservedChairs = data.chairs.filter(
    (chair) => chair.state === "reserved",
  );
  const count = reservedChairs.length;
  const sum = reservedChairs.reduce((acc, chair) => acc + chair.price, 0);

  return (
    <React.Fragment>
      <div className="count-sum__container">
        <div className="count">
          <p>Count: {count}</p>
        </div>
        <div className="sum">
          <p>Sum: {sum.toLocaleString("en-US")} تومان</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowCountAndSum;
