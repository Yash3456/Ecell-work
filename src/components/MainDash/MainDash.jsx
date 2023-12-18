import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div>
      <h1 className="navbar">Budget and Prioritization</h1>
      <div className="MainDash">
      <Cards />
      <Table />
    </div>
    </div>
  );
};

export default MainDash;
