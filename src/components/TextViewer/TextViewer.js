import React, {Component} from "react";
import "./TextViewer.css";
import Username from "./Username/Username"
import axios from "axios"

class TextViewer extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.timeCalculatorStart = this.timeCalculatorStart.bind(this);
		this.updateInputValue = this.updateInputValue.bind(this);
		this.overallTime = this.overallTime.bind(this);
		this.state = {
			inputValue: "",
			message:
				"Click submit after you have finished to reveal your overall score!",
		};
	}

	state = {
		loading: true,
		quote: null,
	};

	async componentDidMount() {
		const url = "https://api.quotable.io/random?minLength=150";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({quote: data, loading: false});
		this.setState({Content: this.state.quote.content});
		console.log(data);
	}

	timeCalculatorStart() {
		var today = new Date(),
			hour = today.getHours(),
			minute = today.getMinutes() + 60 * hour,
			seconds = today.getSeconds() + 60 * minute;

		this.setState({StartTime: seconds});
		console.log(seconds);
	}

	timeCalculatorEnd() {
		var today = new Date(),
			hour = today.getHours(),
			minute = today.getMinutes() + 60 * hour,
			seconds = today.getSeconds() + 60 * minute;

		this.setState({EndTime: seconds});
		console.log(seconds);
	}

	/*

	let formData = new FormData();
			formData.append("text", this.state.text);
			const url = "http://localhost/Front-End/typeracer2/backend/";
			axios.post(url, formData).then(res=> console.log(res.data)).catch(err=> console.log(err));

*/

	overallTime() {
		const endTime = Date.now();
		return endTime - this.state.StartTime;
	}

	onSubmit = (e) => {
		const totalTime = this.overallTime();

		const textinput = this.state.inputValue;
		const inputLength = textinput.length;

		if (textinput === this.state.Content) {
			var lps = inputLength / totalTime;
			console.log(lps);
			
			this.setState({
				LettersPerSecond: lps,
				message:
					"Your score is " +
					lps +
					" letters per second! Good job! Refresh the page for another try!",
			});

/*

			let formData = new FormData();
			formData.append("highscore", this.state.inputValue);
			const url = "http://localhost/Front-End/typeracer2/backend/";
			axios
				.post(url, formData)
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));
*/

		} else {
			this.setState({
				message:
					"Your input is incorrect, refresh the page and start again! Remember, you always learn from your failures, so never give up!",
			});
		}
	};

	updateInputValue(evt) {
		this.setState({
			inputValue: evt.target.value,
		});
	}

	render() {
		return (
			<div>
				<div>
					<div className="text-viewer-body">
						{this.state.loading || !this.state.quote ? (
							<div className="text-loading-text"> loading... </div>
						) : (
							<div>
								<div className="text-viewer">
									<div className="font-weight-bold">
										{this.state.quote.content}
									</div>{" "}
									- {this.state.quote.author}
								</div>
							</div>
						)}
					</div>
				</div>
				<Username />
				<div>
					Click on the text area to start:
					<form>
						<input
							type="text"
							value={this.state.inputValue}
							className="input-text"
							onInput={(evt) => this.updateInputValue(evt)}
							onClick={this.timeCalculatorStart}
						/>
					</form>
					<button
						type="submit"
						className="btn btn-submit"
						onClick={() => {
							this.timeCalculatorEnd();
							this.onSubmit();
						}}
					>
						Submit
					</button>
					<div>{this.state.message}</div>
				</div>
			</div>
		);
	}
}

export default TextViewer;
