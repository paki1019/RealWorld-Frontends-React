import React, { Component } from "react";

class FeedNavbar extends Component {
	render() {
		return (
			<div className="feed-toggle">
				<ul className="nav nav-pills outline-active">
					<li className="nav-item">
						<a href="" className="nav-link active">
							Global Feed
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default FeedNavbar;
