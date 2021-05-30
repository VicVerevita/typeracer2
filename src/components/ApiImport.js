import React, {Component} from "react";

class ApiImport {
	state = {
		loading: true,
		quote: null,
	};

	async componentDidMount() {
		const url = "https://api.quotable.io/random?minLength=200";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({quote: data, loading: false});
		console.log(data);
	}
}
