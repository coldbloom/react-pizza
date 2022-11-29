import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setPageCount} from './../redux/slices/filterSlice'

const data = [{name: 'Все'},{name: 'Мясные'}, {name: 'Вегетарианская'}, {name: 'Гриль'}, {name: 'Острые'}, {name: 'Закрытые'},]

const Categories = ({value}) => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.filter.pageCount)
    const onChangeCategory = (i) => {
        dispatch(setCategoryId(i))
        if (currentPage !== 1) {
            dispatch(setPageCount(1))
        }
    }
    return (
        <div className="categories">
            <ul>
                {data.map((el, i) => (
                    <li key={i}
                        onClick={() => onChangeCategory(i)}
                        className={(value === i) ? 'active' : null}
                    >
                        {el.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;