import React, {Component} from "react";

class Username extends Component {
	constructor(props) {
		super(props);
		this.updateInputValue = this.updateInputValue.bind(this);
		this.state = {
			inputValue: "",
		};
	}

	updateInputValue(evt) {
		this.setState({
			inputValue: evt.target.value,
		});
	}

	render() {
		return (
			<form>
				<input
					className="username"
					name="username"
					type="text"
					value={this.state.inputValue}
					placeholder="Input username for highscores"
					onInput={(evt) => this.updateInputValue(evt)}
				/>
			</form>
		);
	}
}

export default Username;
