import React, {useCallback, useContext, useRef, useState} from 'react';
import s from './Search.module.scss'
import searchIcon from './../../assets/search.png'
import cleanIcon from './../../assets/cross-search.png'
import cn from 'classnames'
import debounce from 'lodash.debounce'
import { SearchContext } from "../../App";

const Search = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext)
    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    const onCLickClear = () => {
        setSearchValue('');
        setValue('')
        inputRef.current.focus();
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str)
            //console.log(str)
        }, 300),
        []
    )

    const onChangeValue = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    return (
        <div className={s.root}>
            <img src={searchIcon} className={s.icon}/>
            <input
                ref={inputRef}
                className={s.input}
                placeholder='Поиск пиццы...'
                type="text"
                value={value}
                onChange={(e) => onChangeValue(e)}
            />
            {searchValue &&
                <img
                    src={cleanIcon}
                    onClick={() => onCLickClear()}
                    className={cn(s.cleanIcon, {'s.active': (searchValue !== '')},)}
                />}
        </div>
    );
};

export default Search;