import React from 'react';
import s from './Search.module.scss'
import searchIcon from './../../assets/search.png'
import cleanIcon from './../../assets/cross-search.png'
import cn from 'classnames'

const Search = ({searchValue, setSearchValue}) => {
    return (
        <div className={s.root}>
            <img src={searchIcon} className={s.icon}/>
            <input
                className={s.input}
                placeholder='Поиск пиццы...'
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue &&
                <img
                    src={cleanIcon}
                    onClick={() => setSearchValue('')}
                    className={cn(s.cleanIcon, {'s.active': (searchValue !== '')},)}
                />}
        </div>
    );
};

export default Search;