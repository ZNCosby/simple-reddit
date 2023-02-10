import { render } from "@testing-library/react";
import React, {useState} from "react";
import './Searchbar.css';
import logo from './logo.png';

export function Searchbar() {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

      return(
        <div className="headerBar">
            <div className="logoAndHeader">
                <img src={logo} alt="logo" className="logo"/>
                <h2 className="header">Simple Reddit</h2>
            </div>
            <form className="searchbar">
                <input
                    type="search"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput}
                />
                <button type="submit" aria-label="Search">
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </form>
        </div>
    );
}