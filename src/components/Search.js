import React from "react";
import { FaSearch } from "react-icons/fa";

function Search({handleInput, search}){
    return(
        <section className="searchbox-wrap">
            <div className="searchbox-container">
                <input type="text" placeholder="Search for a movie..." className="searchbox"
                onChange={handleInput}
                onKeyDown={search}/>
                <button className="search-button" onClick={search}>
                <FaSearch />
                </button>
            </div>
            
        </section>

    )
}

export default Search