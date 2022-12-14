import React, {useContext, useEffect, useState} from 'react';
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaItem from "../components/PizzaBlock";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import axios from 'axios'
import { SearchContext } from "../App";
import { useSelector} from "react-redux";

const Home = () => {
    const {searchValue} = useContext(SearchContext)


    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const sortType = useSelector(state => state.filter.sort)
    const categoryId = useSelector(state => state.filter.categoryId)
    const currentPage = useSelector(state => state.filter.pageCount)

    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const sort = `&sortBy=${sortType.sortProperty}&order=${sortType.sortValue}`
    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://637945d67419b414df8cdd1c.mockapi.io/Items?page=${currentPage}&limit=4${category}${sort}${search}`)
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
    }, [categoryId, sortType, searchValue, currentPage])

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
    const pizzas = items.map((obj, i) => <PizzaItem key={i} {...obj}/>);

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} />
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? skeletons
                        : pizzas
                }
            </div>
            <Pagination/>
        </>
    );
};

export default Home;