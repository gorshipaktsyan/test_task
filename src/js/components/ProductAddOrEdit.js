import React, {Component} from "react";
import { browserHistory } from 'react-router';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
const uuidv1 = require('uuid/v1');

export default class ProductAddOrEditComponent extends Component {
    constructor(props) {
        super(props);
        let item = {
            id: "",
            name: "",
            price: "",
            description: "",
            creationDate: ""
        };
        if (props.editingProduct) {
            item = props.editingProduct;
        }
        this.state = {
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            creationDate: item.creationDate,
        };
    }
    
    componentWillReceiveProps(props, oldProps) {
        this.syncPropsWithState(props);
    }
    
    syncPropsWithState(props) {
        let item = {
            id: "",
            name: "",
            price: "",
            description: "",
            creationDate: ""
        };
        if (props.editingProduct) {
            item = props.editingProduct;
        }
        this.setState({
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            creationDate: item.creationDate
        });
    }
    
    onSaveClick() {
        const today = new Date();
        const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
        const creationDate = this.state.date ? this.state.date : date;
        const id = this.state.id ? this.state.id : uuidv1();
        const product = {...this.state, id, creationDate};
        this.props.actions.addOrEditProduct(product);
        browserHistory.push('/');
    }
    
    render() {
        
        const { name, price, description } = this.state;
        const isDisabled = !name || !description || !(price > 0);
        
        return (
            <div className="product-edit">
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='Product Name'
                            placeholder='Product Name'
                            defaultValue={this.state.name}
                            onChange={(event) => this.setState({name: event.target.value})}
                        />
                        <Form.Field
                            control={Input}
                            label='Product Price'
                            placeholder='Product Price'
                            type="number"
                            defaultValue={this.state.price}
                            onChange={(event) => this.setState({price: event.target.value})}
                        />
                    </Form.Group>
                    <Form.Field
                        control={TextArea}
                        label='Product Description'
                        placeholder='Product Description'
                        defaultValue={this.state.description}
                        onChange={(event) => this.setState({description: event.target.value})}
                    />
                    <Form.Field
                        disabled={isDisabled}
                        control={Button}
                        content='Save Product'
                        onClick={() => this.onSaveClick()}
                    />
                </Form>
            </div>
        );
    }
}
