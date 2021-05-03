import React, {Component} from "react";
import "./TextViewer.css";
import TextFetch from "../TextFetch/TextFetch";

class TextViewer extends Component {
	state = {
		loading: true,
		quote: null,
	};

	async componentDidMount() {
		const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({quote: data.quotes[0], loading: false});
		console.log(data.quotes[0]);
	}

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
