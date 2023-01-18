import React, { useState } from "react";
import { Input, Button } from './SearchBar.styled';

const SearchBar = ({ searchMovies }) => {
    const [filter, setFilter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        searchMovies(filter);
        setFilter("");
    };

    const handleChange = (e) => {
        setFilter(e.target.value);
    }
    
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <Input type="search" name="searchMovie" value={filter} onChange={e => handleChange(e)}/>
            <Button>Search</Button>
        </form>
    )
}

export default SearchBar