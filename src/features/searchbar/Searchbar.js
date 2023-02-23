import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../posts/postsSlice";
import './Searchbar.css';
import logo from './logo.png';

export function Searchbar() {
    const [searchInput, setSearchInput] = useState("");
    const searchTerm = useSelector((state) => state.posts.searchTerm);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchInput(e.target.value);
      };

      useEffect(() => {
        setSearchInput(searchTerm);
      }, [searchTerm]);

      const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchInput));
      };

      return(
        <div className="headerBar">
            <div className="logoAndHeader">
                <img src={logo} alt="logo" className="logo"/>
                <h2 className="header">Simple Reddit</h2>
            </div>
            <form className="searchbar" onSubmit={onSearchTermSubmit}>
                <input
                    type="search"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput}
                />
                <button type="submit" aria-label="Search" className="search" onClick={onSearchTermSubmit}>
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </form>
        </div>
    );
}