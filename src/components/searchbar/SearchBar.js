import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import "./searchbar.css";


const SearchBar = () => {

    return (
        <React.Fragment>
            <div class="box">
                <div class="searchbar-container ">
                    <FeatherIcon  icon="search" size="24"  />
                    <input type="search" id="search"  />
                    <button className="btn">Find Job</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SearchBar;