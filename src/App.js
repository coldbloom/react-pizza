import React, {useState, createContext} from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from './pages/Home'
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart"
import Test from "./pages/Test"
import {Routes, Route} from "react-router-dom";

export const SearchContext = createContext();

function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <Header />
                <div className="content container">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="*" element={<NotFound />}/>
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/test" element={<Test />}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
