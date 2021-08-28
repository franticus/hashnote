import React from 'react';
import classes from './SearchBar.module.sass'

const SearchBar = ({value, onChange, clear}) => {
    return (
        <div className={classes.searchBarContainer}>
            <input className={classes.searchBar}
                   value={value}
                   onChange={onChange}
                   placeholder='Поиск...'
                   type="text"/>
            <span onClick={clear}><i className="fal fa-times"/></span>
        </div>
    );
};

export default SearchBar;
