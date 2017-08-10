import React from "react";
import { Button } from 'semantic-ui-react'

export default class ProductElementComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { price, name, description } = this.props.product;
        return (
            <div className="product-element">
                <p>
                    <span className="title">Product Name</span><br />
                    <span>{name}</span>
                </p>
                <p>
                    <span className="title">Product Price</span><br />
                    <span>{price}$</span>
                </p>
                <p>
                    <span className="title">Product description</span>
                    <span className="product-comp">{description}</span>
                </p>
                <Button size='mini' color="blue" onClick={this.props.handleView}>View</Button>
                <Button size='mini' color="blue" onClick={this.props.handleEdit}>Edit</Button>
                <Button size='mini' color="red" onClick={this.props.handleDelete}>Delete</Button>
            </div>
        );
    }
}
