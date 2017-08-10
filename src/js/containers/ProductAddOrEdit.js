import {connect} from "react-redux";
let _ = require('lodash');
import {actions} from "../modules/ProductList";
import ProductAddOrEditComponent from "../components/ProductAddOrEdit";

const mapStateToProps = (store, props) => {
    let editingProduct = null;
    const id = props.params.id;
    if (id) {
        editingProduct = _.find(store.productList.products, {id});
    }
    return ({
        editingProduct
    });
};

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
    actions: {
        addOrEditProduct: (product) => {
            dispatch(actions.addOrEditProduct(product));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductAddOrEditComponent);
