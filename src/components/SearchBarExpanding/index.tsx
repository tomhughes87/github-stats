import React, { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import searchIcon from "./SearchIcon.svg";
import App from "../../App";

export default function SearchBarExpanding(props: any) {
  // let [testingfromsearch,settestingfromsearch]=useState(0)
  //     function goClicked() {
  //       console.log('go clicked')
  //     }
  // const childRef= React.createRef();

  function setSearch() {
    let searchInout = document.getElementById(
      "searchinput"
    ) as HTMLInputElement;
    props.setSearchWord(searchInout.value);
  }

  return (
    <>
      <br />
      <div className="SearchBar-container">
        <div id="SearchBar-front">
          <img src={searchIcon} id="search-icon" alt="Search Icon" />
          <input id="searchinput" autoComplete="off"></input>
          <p id="search-btn-text" onClick={setSearch}>
            Go
          </p>
        </div>
      </div>
    </>
  );
}
