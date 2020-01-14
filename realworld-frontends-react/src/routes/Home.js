import React, { Component } from "react";
import Navbar from "../components/home/Navbar";
import Banner from "../components/home/Banner";

class Home extends Component {
	render() {
		return (
			<>
				<Navbar />
				<div className="home-page">
					<Banner />
					<div className="container page">
						<div className="row">
							<div className="col-md-9"></div>
							<div className="col-md-3"></div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Home;
