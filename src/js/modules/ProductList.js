import {createAction, createReducer} from "redux-action";
let _ = require('lodash');

const DELETE_PRODUCT = "DELETE_PRODUCT";
const Add_OR_EDIT_PRODUCT = "Add_OR_EDIT_PRODUCT";
const deleteProduct = createAction(DELETE_PRODUCT, data => data);
const addOrEditProduct = createAction(Add_OR_EDIT_PRODUCT, data => data);

export const actions = {
    deleteProduct,
    addOrEditProduct
};

const initialState = {
    products: [
        {
            id: "13843860-7dbe-11e7-8517-55bce3cfd7ea",
            price: '500',
            name: 'Nexus 6',
            description: 'Motorola Google Nexus 6 smartphone was launched in October 2014.',
            creationDate: '10/05/2017'
        },
        {
            id: "13843860-7dbe-11e7-8517-55bce3cfd7eb",
            price: '700',
            name: 'Nexus 7',
            description: 'The LG Google Nexus 5 is powered by 2.26GHz quad-core Qualcomm Snapdragon 800 processor',
            creationDate: '10/08/2017'
        },
        {
            id: "13843860-7dbe-11e7-8517-55bce3cfd7ec",
            price: '450',
            name: 'Asus ZenFon 4',
            description: 'The Asus ZenFone 4 Max runs Android 7.0 and is powered by a 5000mAh non removable battery.',
            creationDate: '10/05/2017'
        },
        {
            id: "13843860-7dbe-11e7-8517-55bce3cfd7es",
            price: '800',
            name: 'Samsung Galaxy J7',
            description: 'The Samsung Galaxy J7 Max is a dual SIM (GSM and GSM) smartphone that accepts Nano-SIM and Nano-SIM. ',
            creationDate: '10/05/2017'
        },
        {
            id: "13843860-7dbe-11e7-8517-55bce3cfd7e6",
            price: '300',
            name: 'Nokia 5',
            description: 'In UK, the Nokia 5 has been priced at GBP 179.99 (roughly Rs. 15,000) ',
            creationDate: '10/05/2017'
        }
    ]
};

const productListReducer = createReducer(initialState, ({
    [DELETE_PRODUCT]: (actionPayload, state) => {
        const products  = state.products.filter(product => product.id != actionPayload);
        return {...state, products};
    },
    [Add_OR_EDIT_PRODUCT]: (actionPayload, state) => {
        let products  = state.products.concat();
        const index = _.findIndex(products, {id: actionPayload.id});
        if(index !== -1){
            products[index] = actionPayload
        } else {
            products.push(actionPayload)
        }
     
        return {...state, products};
    }
}));

export default productListReducer;
