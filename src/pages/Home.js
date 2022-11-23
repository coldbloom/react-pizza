import React, {useEffect, useState} from 'react';
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaItem from "../components/PizzaBlock";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";

const Home = ({searchValue}) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState({name: 'популярности', sortProperty: 'rating', sortValue: 'desc'})
    console.log(sortType.sortProperty)

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sort = `&sortBy=${sortType.sortProperty}&order=${sortType.sortValue}`
    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://637945d67419b414df8cdd1c.mockapi.io/Items?${category}${sort}${search}`)
            .then(res => res.json())
            .then(json => {
                setIsLoading(false)
                setItems(json)
            })
    }, [categoryId, sortType, searchValue])

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
    const pizzas = items.map((obj, i) => <PizzaItem key={i} {...obj}/>);

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)}/>
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? skeletons
                        : pizzas
                }
            </div>
            <Pagination />
        </>
    );
};

export default Home;