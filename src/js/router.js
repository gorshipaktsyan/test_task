import React from "react";
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import ProductViewComponent from "./containers/ProductView";
import ProductAddOrEditContainer from "./containers/ProductAddorEdit";
import ProductListComponent from "./containers/ProductList";


// build the router
const router = (
    <Router history={browserHistory}>
        <Route>
            <Route path='/' component={ProductListComponent} />
            <Route path='add' component={ProductAddOrEditContainer} />
            <Route path='edit/:id' component={ProductAddOrEditContainer} />
            <Route path='view/:id' component={ProductViewComponent} />
        </Route>
    </Router>
);

// export
export { router };
