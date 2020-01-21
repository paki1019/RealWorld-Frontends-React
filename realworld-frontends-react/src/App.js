import React, { Component, lazy, Suspense } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Loader from "./common/Loader";

const Home = lazy(() => import("./routes/Home"));
const Login = lazy(() => import("./routes/Login"));

const history = createBrowserHistory();

class App extends Component {
	render() {
		console.log("done")
		return (
			<Router history={history}>
				<Suspense fallback={<Loader />}>
					{/* Home */}
					<Route exact path="/" component={Home} />
					<Route path="/home" component={Home} />
					{/* Sign in */}
					<Route path="/login" component={Login} />
				</Suspense>
			</Router>
		);
	}
}
export default App;
