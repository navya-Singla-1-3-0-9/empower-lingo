import React, { Component, useState } from 'react';
import '../components/css/quiz.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar';

export default function App() {
	const questions = [
		{
			questionText: 'Which alphabet is this?',
			img:'https://thumbs.dreamstime.com/b/man-showing-letter-isolated-white-background-closeup-finger-spelling-alphabet-american-sign-language-asl-concept-man-209753170.jpg',
			answerOptions: [
				{ answerText: 'A', isCorrect: false, img:""},
				{ answerText: 'T', isCorrect: false,img:""},
				{ answerText: 'X', isCorrect: true, img:""},
				{ answerText: 'U', isCorrect: false,img:""},
			],
		},
		{
			questionText: 'What does the following sign convey?',
			img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFEPog0PJLO7M3aa1QCFYjzQPnffiTwA_y0g&usqp=CAU",
			answerOptions: [
				{ answerText: 'Sorry', isCorrect: false,img:""},
				{ answerText: 'Lunch/Eat', isCorrect: true,img:""},
				{ answerText: 'Thankyou!', isCorrect: false ,img:""},
				{ answerText: 'Hello!', isCorrect: false,img:"" },
			],
		},
		{
			questionText: 'Identify the option which is used to represent letter A',
			img:"",
			answerOptions: [
				{ answerText: '', isCorrect: true,img:"https://emilypost.com/client_media/images/a.jpg"},
				{ answerText: '', isCorrect: false,img:"https://thumbs.dreamstime.com/b/elderly-woman-show-hand-sign-language-i-love-you-isolated-white-background-clipping-path-asia-elderly-woman-show-hand-sign-186063902.jpg"},
				{ answerText: '', isCorrect: false,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwVNnaiDulhp_fw_oGOEtP-7OboOy6josHw&usqp=CAU"},
				{ answerText: '', isCorrect: false,img:"https://previews.123rf.com/images/ovsianka/ovsianka1912/ovsianka191200022/134573047-finger-spelling-letter-m-in-american-sign-language-on-white-background-asl-concept.jpg"},
			],
		},
		{
			questionText: 'What are the following signs representing?',
			img:"https://png.pngtree.com/element_our/png_detail/20181129/love-by-fingers-from-american-sign-language-png_251341.jpg",
			answerOptions: [
				{ answerText: 'LUNCH', isCorrect: false,img:""},
				{ answerText: 'NICE', isCorrect: false ,img:""},
				{ answerText: 'HAPPY', isCorrect: false,img:""},
				{ answerText: 'LOVE', isCorrect: true,img:""},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
   let value= currentQuestion+1;
   console.log(value);
	return (
       
        <div className="quiz" style={{backgroundColor:"black"}}>
			<NavBar/>
			<div className="row" id="main-con">
			<h1>Quiz</h1>
			<div className="col-lg-4">
			
				
			</div>
			<div className="col-lg-8">
			<div className='app1'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions.length}
					</div>
				) : (
					<>
				
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>
								{questions[currentQuestion].questionText}
								<br/>
								{
								(questions[currentQuestion].img!="")?<img src={questions[currentQuestion].img}/>:""
								}

							</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
									{answerOption.answerText!=""?answerOption.answerText:""}
									{answerOption.img!=""?<img src={answerOption.img}/>:""}
									</button>
							))}
						</div>
					</>
				)}
			</div>
			</div>
			</div>
        </div>
	);
}