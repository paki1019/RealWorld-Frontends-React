import React, { Component, lazy, Suspense } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Loader from "./common/Loader";

const Home = lazy(() => import("./routes/Home"));

const history = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Suspense fallback={<Loader />}>
					<Route exact path="/" component={Home} />
					<Route path="/Home" component={Home} />
				</Suspense>
			</Router>
		);
	}
}
export default App;
