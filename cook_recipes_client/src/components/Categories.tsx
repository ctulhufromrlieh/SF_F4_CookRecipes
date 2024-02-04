import * as React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

type CategoryData = {
    id: number,
    name: string,
}

class Categories extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    categoriesURL = "http://127.0.0.1:8000/categories";

    updateItems(): void{
        axios.get(this.categoriesURL).then(res => {
            let resdata = res.data;
            this.setState({
                isLoaded: true,
                items: resdata,
            });

            // console.log("then_state", this.state);
            // console.log(resdata);
        }).catch(error => {
            console.log("error", error);
        })
    }

    getCategoryLink(id: number){
        return `/categories/${id}`;
    }

    componentDidMount(): void {
        this.updateItems();
    }

    render(){
        const items = this.state["items"];
        // console.log("items", items);

        return (
            !this.state ?
            <p>Loading...</p>
            :
            <React.Fragment>
                <h2>
                    Категории блюд
                </h2>
                <ul>
                    {items.map((category: CategoryData, index) => {
                        
                        return (
                            <React.Fragment key={category.id}>
                                <li>
                                    <Link to={this.getCategoryLink(category.id)}>{category.name}</Link>
                                </li>
                            </React.Fragment>
                        )
                    } )
                    }
                </ul>
            </React.Fragment>
        );
    }
}

export default Categories;