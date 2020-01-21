import React, { Component } from "react";
import PageNavigation from "./PageNavigation";

class Article extends Component {
	render() {
		return (
			<div>
				<div className="article-preview">
					<div className="article-meta">
						<a className="" href="#@tuananh01">
							<img src="https://static.productionready.io/images/smiley-cyrus.jpg" />
						</a>
						<div className="info">
							<a className="author" href="#@tuananh01">
								tuananh01
							</a>
							<span className="date">Tue Jan 21 2020</span>
						</div>
						<div className="pull-xs-right">
							<button className="btn btn-sm btn-outline-primary">
								<i className="ion-heart">0</i>
							</button>
						</div>
					</div>{" "}
					<a className="preview-link" href="#article/test-p9o8iy">
						<h1>Test 1</h1>
						<p>Test 1</p>
						<span>Read more...</span>
						<ul className="tag-list">
							<li className="tag-default tag-pill tag-outline">test</li>
						</ul>
					</a>{" "}
				</div>
				<PageNavigation />
			</div>
		);
	}
}

export default Article;
