import React, { useState } from "react";
import { Input, Button } from './SearchBar.styled';

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
            <Input type="search" name="searchMovie" value={filter} onChange={e => handleChange(e)}/>
            <Button>Search</Button>
        </form>
    )
}

export default SearchBar