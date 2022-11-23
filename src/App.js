import React, {useState} from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from './pages/Home'
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart"
import Test from "./pages/Test"
import { Routes, Route } from "react-router-dom";


function App() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div>
            <div className="wrapper">
                <Header searchValue = {searchValue} setSearchValue={setSearchValue}/>
                <div className="content container">
                    <Routes>
                        <Route path="/" element={<Home searchValue={searchValue}/>}/>
                        <Route path="*" element={<NotFound />}/>
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/test" element={<Test />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
