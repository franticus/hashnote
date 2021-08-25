import React from 'react';
import classes from './SearchBar.module.sass'

const SearchBar = ({value, onChange}) => {
    return (
        <input className={classes.searchBar}
               value={value}
               onChange={onChange}
               placeholder='Поиск...'
               type="text"/>
    );
};

export default SearchBar;
