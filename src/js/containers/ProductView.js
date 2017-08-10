import {connect} from "react-redux";
let _ = require('lodash');
import ProductViewComponent from "../components/ProductView";

const mapStateToProps = (store, props) => {
    const id = props.params.id;
    let viewingProduct = null;
    if (id) {
        viewingProduct = _.find(store.productList.products, {id});
    }
    return ({
        viewingProduct
    });
};

export default connect(
    mapStateToProps,
)(ProductViewComponent);
