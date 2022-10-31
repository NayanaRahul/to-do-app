import React, { useState } from "react";
import "../style/Footer.css";

function Footer() {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleClick = (e) => {
    if (!openSearch) {
      setSearchText("");
    }
    setOpenSearch(!openSearch);
  };
  return (
    <div className="footerContainer">
      {/* SEARCH */}
      <div className={`searchWrapper ${openSearch ? "open" : ""}`}>
        <input
          type="text"
          name="searchTask"
          placeholder="Search..."
          className="searchTask"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div className="icon" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#2f4858"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>
      {/* NUMBER OF TASKS YET TO COMPLETE */}
      <div>3 items left</div>
      {/* FILTER BUTTONS -  ALL, ACTIVE, COMPLETED TASKS */}
      <div className="filterButtonsContainer">
        <button className="taskButton active">All</button>
        <button className="taskButton">Active</button>
        <button className="taskButton">Completed</button>
      </div>
    </div>
  );
}

export default Footer;
