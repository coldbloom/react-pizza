import React, {useEffect, useState} from 'react';
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaItem from "../components/PizzaBlock";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://637945d67419b414df8cdd1c.mockapi.io/Items')
            .then(res => res.json())
            .then(json => {
                setIsLoading(false)
                setItems(json)
            })
    }, [])
    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : items.map((obj, i) => <PizzaItem key={i} {...obj}/>)
                }
            </div>
        </>
    );
};

export default Home;