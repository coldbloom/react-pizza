import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setCategoryId} from './../redux/slices/filterSlice'

const data = [{name: 'Все'},{name: 'Мясные'}, {name: 'Вегетарианская'}, {name: 'Гриль'}, {name: 'Острые'}, {name: 'Закрытые'},]

const Categories = ({value}) => {
    const dispatch = useDispatch()
    return (
        <div className="categories">
            <ul>
                {data.map((el, i) => (
                    <li key={i}
                        onClick={() => dispatch(setCategoryId(i))}
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