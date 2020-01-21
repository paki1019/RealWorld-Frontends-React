import React, { Component } from "react";
import Navbar from "../components/home/Navbar";

class Login extends Component {
	render() {
		return (
			<>
				<Navbar />
				<div className="auth-page">
					<div className="container page">
						<div className="row">
							<div className="col-md-6 offset-md-3 col-xs-12">
								<h1 className="text-xs-center">Sign In</h1>
								<p className="text-xs-center">
									<a className="" href="#register">
										Need an account?
									</a>
								</p>
								<form>
									<fieldset>
										<fieldset className="form-group">
											<input type="email" className="form-control form-control-lg" placeholder="Email" />
										</fieldset>
										<fieldset className="form-group">
											<input type="password" className="form-control form-control-lg" placeholder="Password" />
										</fieldset>
										<button className="btn btn-lg btn-primary pull-xs-right" type="submit">
											Sign in
										</button>
									</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Login;
