import React from "react";

const QuestionBox = ({ question, options }) => {
	return (
		<div className="questionBox">
			<div className="question">{question}</div>
		</div>
	);
};

export default QuestionBox;
