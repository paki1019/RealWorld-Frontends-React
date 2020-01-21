import React, { Component } from "react";
import Navbar from "../components/home/Navbar";
import Banner from "../components/home/Banner";
import FeedNavbar from "../components/home/FeedNavbar";
import Article from "../components/home/Article";
import Sidebar from "../components/home/Sidebar";

class Home extends Component {
	render() {
		return (
			<>
				<Navbar />
				<div className="home-page">
					<Banner />
					<div className="container page">
						<div className="row">
							<div className="col-md-9">
								<FeedNavbar />
								<Article />
							</div>
							<div className="col-md-3">
								<Sidebar />
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Home;
