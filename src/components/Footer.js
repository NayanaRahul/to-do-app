import React, { useContext, useRef, useState } from "react";
import "../style/Footer.scss";
import { MyContext } from "./Home";
import SearchTask from "./SearchTask";

function Footer() {
  const [openSearch, setOpenSearch] = useState(false);
  const { value3 } = useContext(MyContext);
  const [searchText, setSearchText] = value3;
  const searchInputRef = useRef();

  const handleClick = (e) => {
    if (!openSearch) {
      setSearchText("");
      searchInputRef.current.focus();
    }
    setOpenSearch(!openSearch);
  };
  return (
    <div className="footerContainer">
      {/* SEARCH */}
      <SearchTask
        handleClick={handleClick}
        searchText={searchText}
        setSearchText={setSearchText}
        openSearch={openSearch}
        searchInputRef={searchInputRef}
      />
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
