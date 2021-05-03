import React from "react";

export default class FetchRandomText extends React.Component {
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

	/*  
    
    //  TEST

	render() {
		return (
			<div>
				{this.state.loading || !this.state.quote ? (
					<div>loading...</div>
				) : (
					<div>
						<div>{this.state.quote.text}</div>
						<div>{this.state.quote.author}</div>
					</div>
				)}
			</div>
		);
	}

    */
}
