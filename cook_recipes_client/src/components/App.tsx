import * as React from "react";

import { Route, Routes, Link } from "react-router-dom";


import Categories from "./Categories";
import Category from "./Category";
import Dish from "./Dish";
import SchemeAPI from "./SchemeAPI";

class App extends React.Component<any, any> {
    render(){
        return (
            <>
                <nav>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/scheme-api">Схема API</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/dishes/:id" element={<Dish/>}>
                    </Route>
                    <Route path="/categories/:id" element={<Category/>}>
                    </Route>
                    <Route path="/" element={<Categories/>}>                        
                    </Route>
                    <Route path="/categories" element={<Categories/>}>                        
                    </Route>
                    <Route path="/scheme-api" element={<SchemeAPI/>}>                        
                    </Route>
                </Routes>
            </>
        );
    }
}

export default App;