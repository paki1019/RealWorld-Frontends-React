import React, { Component } from "react";

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<p>Popular Tags</p>
				<div className="tag-list">
					<a href="" className="tag-default tag-pill">
						button
					</a>
				</div>
			</div>
		);
	}
}

export default Sidebar;
