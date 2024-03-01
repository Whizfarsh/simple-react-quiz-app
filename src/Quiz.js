import { object } from "prop-types";
import { useState } from "react";

const initialQuiz = [
	{
		question: "What does HTML stand for?",
		options: [
			"Hyper Text Markup Language",
			"Hyperlinks and Text Markup Language",
			"Home Tool Markup Language",
			"Hyperlink Transfer Markup Language",
		],
		answer: "Hyper Text Markup Language",
	},
	{
		question: "Which tag is used to create a hyperlink in HTML?",
		options: ["<a>", "<link>", "<href>", "<hyperlink>"],
		answer: "<a>",
	},
	{
		question:
			"Which property is used in CSS to change the text color of an element?",
		options: ["color", "text-color", "font-color", "foreground-color"],
		answer: "color",
	},
	{
		question: "In JavaScript, what is the syntax for declaring a variable?",
		options: ["var myVar;", "variable myVar;", "myVar = var;", "myVar();"],
		answer: "var myVar;",
	},
	{
		question:
			"Which of the following is NOT a valid way to declare a JavaScript function?",
		options: [
			"function myFunction() {}",
			"var myFunction = function() {}",
			"myFunction: function() {}",
			"() => {}",
		],
		answer: "myFunction: function() {}",
	},
	{
		question: "What does CSS stand for?",
		options: [
			"Cascading Style Sheets",
			"Creative Style Sheets",
			"Colorful Style Sheets",
			"Computer Style Sheets",
		],
		answer: "Cascading Style Sheets",
	},
	{
		question:
			"Which CSS property is used to control the spacing between elements?",
		options: ["margin", "padding", "border", "spacing"],
		answer: "margin",
	},
	{
		question: "What is the correct syntax for an if statement in JavaScript?",
		options: [
			"if (condition) { code block }",
			"if { condition } then { code block }",
			"if [condition] { code block }",
			"if { code block } then (condition)",
		],
		answer: "if (condition) { code block }",
	},
	{
		question: "Which HTML tag is used to define a list item?",
		options: ["<li>", "<ul>", "<ol>", "<list>"],
		answer: "<li>",
	},
	{
		question: "How do you add a comment in JavaScript?",
		options: [
			"// This is a comment",
			"<!-- This is a comment -->",
			"' This is a comment",
			"/* This is a comment */",
		],
		answer: "// This is a comment",
	},
	{
		question: "Which HTML tag is used to define a table row?",
		options: ["<tr>", "<td>", "<table>", "<th>"],
		answer: "<tr>",
	},
	{
		question: "What does CSS specificity refer to?",
		options: [
			"The weight of a CSS rule",
			"The order of CSS rules in a stylesheet",
			"The importance of a CSS declaration",
			"The level of detail in a CSS selector",
		],
		answer: "The level of detail in a CSS selector",
	},
	{
		question: "In JavaScript, what does the '!=='' operator mean?",
		options: [
			"Equal to",
			"Not equal to",
			"Greater than or equal to",
			"Less than or equal to",
		],
		answer: "Not equal to",
	},
	{
		question: "Which CSS property is used to make text bold?",
		options: ["font-weight", "text-decoration", "font-style", "font-size"],
		answer: "font-weight",
	},
	{
		question:
			"What is the purpose of the 'document.getElementById()' method in JavaScript?",
		options: [
			"To change the style of an element",
			"To retrieve an element from the DOM",
			"To create a new HTML element",
			"To delete an HTML element",
		],
		answer: "To retrieve an element from the DOM",
	},
	{
		question:
			"Which HTML attribute is used to specify additional information about an element?",
		options: ["class", "id", "title", "alt"],
		answer: "title",
	},
	{
		question:
			"In CSS, what property is used to change the background color of an element?",
		options: ["background-color", "color", "background", "background-image"],
		answer: "background-color",
	},
	{
		question:
			"What is the purpose of the 'setAttribute()' method in JavaScript?",
		options: [
			"To retrieve the value of an attribute",
			"To add a new attribute to an element",
			"To remove an attribute from an element",
			"To change the value of an existing attribute",
		],
		answer: "To change the value of an existing attribute",
	},
	{
		question: "Which event occurs when the user clicks on an HTML element?",
		options: ["onmouseover", "onchange", "onselect", "onclick"],
		answer: "onclick",
	},
	{
		question: "In CSS, what is the 'box-sizing' property used for?",
		options: [
			"To control the layout of table elements",
			"To adjust the spacing between elements",
			"To specify the behavior of the 'box-model'",
			"To apply a border around an element",
		],
		answer: "To specify the behavior of the 'box-model'",
	},
	{
		question:
			"What is the correct way to link an external CSS file to an HTML document?",
		options: [
			"<link rel='stylesheet' href='styles.css'>",
			"<style src='styles.css'>",
			"<style link='styles.css'>",
			"<css href='styles.css'>",
		],
		answer: "<link rel='stylesheet' href='styles.css'>",
	},
	{
		question: "Which HTML tag is used to create a numbered list?",
		options: ["<ol>", "<ul>", "<li>", "<dl>"],
		answer: "<ol>",
	},
	{
		question:
			"In CSS, what property is used to control the spacing between lines of text?",
		options: ["line-height", "text-spacing", "line-spacing", "letter-spacing"],
		answer: "line-height",
	},
	{
		question:
			"What does the 'typeof' operator in JavaScript return for an array?",
		options: ["'object'", "'array'", "'string'", "'number'"],
		answer: "'object'",
	},
	{
		question:
			"Which CSS property is used to change the size of an element relative to its parent?",
		options: ["width", "height", "size", "scale"],
		answer: "width",
	},
	{
		question:
			"What is the purpose of the 'querySelector()' method in JavaScript?",
		options: [
			"To select multiple elements",
			"To select an element by its class",
			"To select an element by its id",
			"To select an element by its tag name",
		],
		answer: "To select an element by its CSS selector",
	},
	{
		question: "Which HTML tag is used to define a clickable button?",
		options: ["<button>", "<input>", "<label>", "<div>"],
		answer: "<button>",
	},
	{
		question: "In CSS, what is the 'float' property used for?",
		options: [
			"To align text horizontally",
			"To remove an element from the document flow",
			"To position an element absolutely",
			"To create a floating effect on an element",
		],
		answer: "To remove an element from the document flow",
	},
	{
		question:
			"Which JavaScript method is used to add a new item to the end of an array?",
		options: ["push()", "append()", "add()", "insert()"],
		answer: "push()",
	},
	{
		question: "What does the 'transition' property in CSS control?",
		options: [
			"The smoothness of animations",
			"The positioning of elements",
			"The size of elements",
			"The color of text",
		],
		answer: "The smoothness of animations",
	},
];
const totalShownQuiz = 20;

export function Quiz() {
	// let username;
	const [userName, setUserName] = useState("");
	const [isQuizStarted, setIsQuizStarted] = useState(false);
	const [quizEnd, setQuizEnd] = useState(false);
	const [answeredQuiz, setAnsweredQuiz] = useState({});
	// const [showQuiz, setSHowQuiz] = useState(true);

	function handleStart(e) {
		e.preventDefault();
		if (userName.trim() === "") {
			return;
		} else {
			setIsQuizStarted(true);
		}
	}

	return (
		<div className="quiz">
			{!isQuizStarted && (
				<User
					userName={userName}
					setUserName={setUserName}
					handleStart={handleStart}
				/>
			)}
			{isQuizStarted && !quizEnd && (
				<Startquiz
					userValue={userName}
					setIsQuizStarted={setIsQuizStarted}
					setQuizEnd={setQuizEnd}
					answeredQuiz={answeredQuiz}
					setAnsweredQuiz={setAnsweredQuiz}
				/>
			)}
			{quizEnd && (
				<ResultUpdate
					answeredQuiz={answeredQuiz}
					setAnsweredQuiz={setAnsweredQuiz}
					setIsQuizStarted={setIsQuizStarted}
					setQuizEnd={setQuizEnd}
				/>
			)}
		</div>
	);
}
function User({ userName, setUserName, handleStart }) {
	return (
		<form className="form-name" onSubmit={handleStart}>
			<input
				value={userName}
				onChange={(e) => {
					setUserName(e.target.value);
				}}
				type="text"
				name=""
				id="user-name"
				autoComplete="off"
			/>
			<button>Start Quiz</button>
		</form>
	);
}

function Startquiz({
	userValue,
	setIsQuizStarted,
	answeredQuiz,
	setAnsweredQuiz,
	setQuizEnd,
}) {
	const quizLength = initialQuiz.length;
	let randNums = Math.floor(Math.random() * quizLength);

	const [curQuiz, setCurQuiz] = useState(1);
	const [showedQuiz, setShowedQuiz] = useState([randNums]);
	const totalQuized = showedQuiz.length;

	const [optionSelected, setOptionSelected] = useState("");

	// console.log(randNums);
	function handleNext() {
		do {
			randNums = Math.floor(Math.random() * quizLength);
		} while (showedQuiz.includes(randNums));
		setCurQuiz((cur) => cur + 1);
		if (curQuiz === totalQuized) {
			setShowedQuiz((showed) => [...showed, randNums]);
		}

		setAnsweredQuiz((previousAnswer) => ({
			...previousAnswer,
			[initialQuiz[showedQuiz[curQuiz - 1]].question]: !optionSelected
				? setOptionSelected("")
				: optionSelected,
		}));
		// console.log(answeredQuiz);
	}
	function handlePrevious() {
		setCurQuiz((cur) => cur - 1);
	}
	const previousDisable = curQuiz === 1;
	const nextDisable = curQuiz === totalShownQuiz;

	function handleSelectedOption(e) {
		setOptionSelected(e.target.value);
	}

	function handleSubmit() {
		// setIsQuizStarted(false);
		setAnsweredQuiz((previousAnswer) => ({
			...previousAnswer,
			[initialQuiz[showedQuiz[curQuiz - 1]].question]: !optionSelected
				? setOptionSelected("")
				: optionSelected,
		}));
		setQuizEnd(true);
	}
	return (
		<div className="quiz-main">
			<h2>Hello {userValue}</h2>
			<div className="quizes">
				<ul>
					<p id="question">
						{curQuiz}. {initialQuiz[showedQuiz[curQuiz - 1]].question}
					</p>
					{initialQuiz[showedQuiz[curQuiz - 1]].options.map((option) => (
						<Options
							option={option}
							key={option}
							handleSelectedOption={handleSelectedOption}
							optionSelected={optionSelected}
							answeredQuiz={answeredQuiz}
							question={initialQuiz[showedQuiz[curQuiz - 1]].question}
						/>
					))}
					<span>{initialQuiz[showedQuiz[curQuiz - 1]].answer}</span>
				</ul>
			</div>
			<div className="btns">
				<Button handleClick={handlePrevious} disabledStatus={previousDisable}>
					Previous
				</Button>
				{curQuiz === totalShownQuiz ? (
					<Button handleClick={handleSubmit}>Submit</Button>
				) : (
					<Button handleClick={handleNext} disabledStatus={nextDisable}>
						Next
					</Button>
				)}
			</div>
		</div>
	);
}

function Options({
	option,
	handleSelectedOption,
	optionSelected,
	answeredQuiz,
	question,
}) {
	const selectedAnswer = answeredQuiz[question];
	return (
		<li>
			<input
				type="radio"
				value={option}
				onChange={handleSelectedOption}
				checked={
					option === selectedAnswer
						? true
						: optionSelected === option
						? true
						: false
				}
				// optionSelected === option ? true : false
			/>
			{option}
		</li>
	);
}

function Button({ handleClick, children, disabledStatus }) {
	return (
		<button
			className="btn"
			onClick={handleClick}
			style={disabledStatus ? { opacity: 0 } : { opacity: 1 }}
		>
			{children}
		</button>
	);
}

function ResultUpdate({
	answeredQuiz,
	setAnsweredQuiz,
	setIsQuizStarted,
	setQuizEnd,
}) {
	const submittedQuestions = Object.keys(answeredQuiz);
	console.log(submittedQuestions);
	let corrected = 0;

	initialQuiz.forEach((quiz) => {
		if (answeredQuiz.hasOwnProperty(quiz.question)) {
			if (answeredQuiz[quiz.question] === quiz.answer) {
				corrected++;
			}
		}
	});
	const percentage = (corrected / totalShownQuiz) * 100;

	function handleResetBtn() {
		corrected = 0;
		setAnsweredQuiz({});
		setQuizEnd(false);
	}
	return (
		<>
			<div className="results">
				<p className="reviews">
					You have submitted {submittedQuestions.length} quiz. With {corrected}{" "}
					correct answers.
				</p>
				<p className="score">
					You Scored
					<span
						style={{
							color:
								percentage >= 60
									? "#2E8B57"
									: percentage < 50
									? "#ff0000"
									: "#ADFF2F",
							margin: "0 0.5rem",
						}}
					>
						{Math.floor(percentage)}%
					</span>
					in total
				</p>
				<Button handleClick={handleResetBtn}>Reset</Button>
			</div>
		</>
	);
}
