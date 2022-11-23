import React, {useState} from 'react';

const data = [{name: 'Все'},{name: 'Мясные'}, {name: 'Вегетарианская'}, {name: 'Гриль'}, {name: 'Острые'}, {name: 'Закрытые'},]

const Categories = ({value, onChangeCategory}) => {

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