import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
  
import { withRouter } from "../util/utilfuncs"

type DishData = {
    id: number,
    title: string,
}

class Category extends React.Component{

    constructor(props: any) {
        super(props);
        this.state = {
            isLoaded: false,
            name: "",
            items: []
        };
    }

    updateItems(): void{
        const params = this.props["router"]["params"];
        console.log("params", params);
        const url = this.getCategoryURL(params.id);

        axios.get(url).then(res => {
            let resdata = res.data;
            this.setState({
                isLoaded: true,
                name: resdata.name,
                items: resdata.data,
            });
        }).catch(error => {
            console.log("error", error);
        })
    }

    getCategoryURL(id){
        return `http://127.0.0.1:8000/categories/${id}`;
    }

    getDishLink(id: number){
        return `/dishes/${id}`;
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
                    Категория: {this.state["name"]}
                </h2>
                <h3>
                    Блюда:
                </h3>
                <ul>
                    {items.map((dish: DishData, index) => {
                        
                        return (
                            <React.Fragment key={dish.id}>
                                <li>
                                    <Link to={this.getDishLink(dish.id)}>{dish.title}</Link>
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

export default withRouter(Category);