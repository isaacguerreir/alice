import * as React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'

import App from "./App";
import Page404 from './pages/404/404'


const routing = (
	<Router>
		<div>
		    <Switch>
			    <Route exact path='/' component={withRouter(App)}/>
			    <Route component={withRouter(Page404)} />
		    </Switch>
		</div>
	</Router>
)


ReactDOM.render(routing, document.getElementById("root"));
