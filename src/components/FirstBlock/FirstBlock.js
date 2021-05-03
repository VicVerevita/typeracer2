import React, {Component} from "react";
import "./FirstBlock.css";
import TextViewer from "../TextViewer/TextViewer";

class FirstBlock extends Component {
	render() {
		return (
			<div className="navbar-excluded">
				<div className="row text-and-highscores">
					<div className="col-md-9 text-and-input">
						<TextViewer className="text-viewer" />
					</div>
					<div className="col-md-3 highscores"></div>
				</div>
			</div>
		);
	}
}

export default FirstBlock;
