import React, {useEffect, useState} from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaItem from "./components/PizzaBlock";
import pizzas from './assets/pizza.json'
import Skeleton from "./components/PizzaBlock/Skeleton";
import PizzaBlock from "./components/PizzaBlock";


function App() {
    const {a, b, c} = {a: 1, b: 2, c: 3}  // деструктуризация

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log(123)
        fetch('https://637945d67419b414df8cdd1c.mockapi.io/Items')
            .then(res => res.json())
            .then(json => {
                setIsLoading(false)
                setItems(json)
            })
    }, [])

    console.log(555)



    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
