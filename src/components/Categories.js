import React, {useState} from 'react';

const data = [{name: 'Мясные'}, {name: 'Вегетарианская'}, {name: 'Гриль'}, {name: 'Острые'}, {name: 'Закрытые'},]

const Categories = () => {
    const [active, setActive] = useState(null)
    const activeFunc = (pizzaName) => {
        setActive(pizzaName)
    }
    return (
        <div className="categories">
            <ul>
                {data.map(el => (
                    <li key={el.name}
                        onClick={() => activeFunc(el.name)}
                        className={active === el.name && 'active'}
                    >
                        {el.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;