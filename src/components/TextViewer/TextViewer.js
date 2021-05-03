import React, {Component} from "react";
import "./TextViewer.css";
import TextFetch from "../TextFetch/TextFetch";

class TextViewer extends Component {
	render() {
		return (
			<div className="text-viewer-body">
				<p>
					<TextFetch />
				</p>
			</div>
		);
	}
}

export default TextViewer;
