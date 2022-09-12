import React from "react";
import SearchBar from "./SearchBar";

import logo from '../img/logo.png';

export default function NavBar() {
    return (
        <div>
            <nav>
                <div>
                    <img
                    id='logo'
                    src={logo}
                    alt='Logo not found'
                    width={100}
                    height={100}
                    />
                </div>
                <div>
                    <SearchBar />                    
                </div>
            </nav>
        </div>
    );
};