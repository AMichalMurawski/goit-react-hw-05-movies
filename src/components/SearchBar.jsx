import React, { useState } from "react";

const SearchBar = ({ ...props }) => {
    const [filter, setFilter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchMovies(filter);
        setFilter("");
    };

    const handleChange = (e) => {
        setFilter(e.target.value);
    }
    
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="search" name="searchMovie" value={filter} onChange={e => handleChange(e)}/>
            <button>Search</button>
        </form>
    )
}

export default SearchBar