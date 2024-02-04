import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
  
import { withRouter } from "../util/utilfuncs"

type IngridientData = {
    ingridient_id: number,
    ingridient_name: string,
    value: string,
}

class Dish extends React.Component{

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
        const url = this.getDishURL(params.id);

        axios.get(url).then(res => {
            let resdata = res.data;
            this.setState({
                isLoaded: true,
                name: resdata.title,
                items: resdata.data,
            });
        }).catch(error => {
            console.log("error", error);
        })
    }

    getDishURL(id){
        return `http://127.0.0.1:8000/dishes/${id}`;
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
                    Блюдо: {this.state["name"]}
                </h2>
                <h3>
                    Ингредиенты:
                </h3>
                <ul>
                    {items.map((ingridient: IngridientData, index) => {
                        
                        return (
                            <React.Fragment key={ingridient.ingridient_id}>
                                <li>
                                    {ingridient.ingridient_name} - {ingridient.value}
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

export default withRouter(Dish);