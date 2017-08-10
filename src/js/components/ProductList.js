import React from "react";
import { browserHistory, Link } from 'react-router';
import { Button } from 'semantic-ui-react'
import ProductElementComponent from './ProductElement'

export default class ProductListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products
        };
    }
    
    handleDelete(product) {
        this.props.actions.deleteProduct(product.id)
    }
    
    handleView(product) {
        browserHistory.push('/view/' + product.id);
    }
    
    handleEdit(product) {
        browserHistory.push('/edit/' + product.id);
    }
    
    handleAdd(product) {
        browserHistory.push('/add/');
    }
    
    render() {
        
        const count = this.props.products.length;
        
        return (
            <div className="wrapper">
                <div className="header">
                    <Button
                        basic
                        color='blue'
                        onClick={this.handleAdd}>
                        Add Product
                    </Button>
                    Products Count: {count}
                </div>
                <div className="products-list">
                    {this.props.products.map((product, index) =>
                        <ProductElementComponent
                            key={index}
                            product={product}
                            handleDelete={() => this.handleDelete(product)}
                            handleView={() => this.handleView(product)}
                            handleEdit={() => this.handleEdit(product)}
                        />
                    )}
                </div>
            </div>
        );
    }
}

