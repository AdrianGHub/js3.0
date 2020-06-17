import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService/index";

class QuizApp extends Component {
	render() {
		return (
			<div className="container">
				<div className="title">QuizApp</div>
			</div>
		);
	}
}

ReactDOM.render(<QuizApp />, document.getElementById("root"));
