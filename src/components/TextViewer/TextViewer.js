import React, {Component} from "react";
import "./TextViewer.css";

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
            <div>
                <div className="text-viewer-body">
                    {this.state.loading || !this.state.quote ? (
                    <div className="text-loading-text"> loading... </div> ) : (
                        <div className="text-viewer">{this.state.quote.text}</div>
                    )}
                </div>
                <div className="author-viewer-body">
                    {this.state.loading || !this.state.quote ? (
                    <div className="author-loading-text"> loading... </div> ) : (
                        <div className="author-viewer">{this.state.quote.author}</div>
                    )}
                </div>
            </div>
        );
    }
}

export default TextViewer;
