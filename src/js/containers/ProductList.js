import {connect} from "react-redux";
import {actions} from "../modules/ProductList";
import ProductListComponent from "../components/ProductList";

const mapStateToProps = (store) => {
    return ({
        products: store.productList.products
    });
};

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
    actions: {
        deleteProduct: (id) => {
            dispatch(actions.deleteProduct(id));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListComponent);
