import React from "react";

export default class ProductViewComponent extends React.Component {
    constructor(props) {
        super(props);
        let item = {
            name: "",
            price: "",
            description: "",
            creationDate: ""
        };
        if (props.viewingProduct) {
            item = props.viewingProduct;
        }
        this.state = {
            name: item.name,
            price: item.price,
            description: item.description,
            creationDate: item.creationDate
        };
    }
    
    componentWillReceiveProps(props, oldProps) {
        this.syncPropsWithState(props);
    }
    
    syncPropsWithState(props) {
        let item = {
            name: "",
            price: "",
            description: "",
            creationDate: ""
            
        };
        if (props.viewingProduct) {
            item = props.viewingProduct;
        }
        this.setState({
            name: item.name,
            price: item.price,
            description: item.description,
            creationDate: item.creationDate
        });
    }
    
    render() {
        
        const { name, price, description, creationDate } = this.state;
        
        return (
            <div className="product-view">
                <p>Prodact Name -> {name}</p>
                <p>Prodact Price -> {price}$</p>
                <p>Prodact Description -> {description}</p>
                <p>Prodact Creation Date -> {creationDate}</p>
            </div>
        );
    }
}
