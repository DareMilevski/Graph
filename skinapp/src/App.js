import "./App.css";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LAUNCHES_QUERY } from "./query/query";

const App = () => {
  const { data } = useQuery(LAUNCHES_QUERY);
  console.log(data)
  return (
    <div className="App">
      Dare
      {data &&
        data.defaultItems.map((el) => (
          <li key={el.categories.id}>{el.categories.name}</li>
        ))}
    </div>
  );
};

export default App;
