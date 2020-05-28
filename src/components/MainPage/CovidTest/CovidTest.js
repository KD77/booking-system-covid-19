import React, { Component } from 'react';
import {data} from './data';
import './CovidTest.css'


class CovidTest extends Component {

  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    scores: [],
    totalScore: 0,
    disabled: true,
    isEnd: false,
    backgroundColor:''

  };

  loadQuizData = () => {
    this.setState(() => {
      return {
        questions: data[this.state.currentQuestion].question,
        scores: data[this.state.currentQuestion].scores,
        options: data[this.state.currentQuestion].options,
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    const { scores, options, myAnswer, totalScore } = this.state;
    let indexOfAnswer = options.indexOf(myAnswer);
    this.setState({
      totalScore: totalScore + scores[indexOfAnswer],
      currentQuestion: this.state.currentQuestion + 1
    });

    console.log(this.state.currentQuestion);
    console.log(this.state.totalScore);

  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: data[this.state.currentQuestion].question,
          options: data[this.state.currentQuestion].options,
          scores: data[this.state.currentQuestion].scores
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({
      myAnswer: answer,
      disabled: false,
    });


  };
  finishHandler = () => {
    if (this.state.currentQuestion === data.length - 1) {
      this.setState({
        isEnd: true,

      });
    }
  };
  refreshThePage(){
    window.location.reload(false)
  }




  render() {
    const { totalScore, options, currentQuestion, isEnd } = this.state;

    if (isEnd === true && totalScore>16) {
      return (
          <div className="f3 br3 ba b--black-10  mw7 shadow-5 vh-75-ns center">

            <h1> The self-assessment test result </h1>
            You should call 1177 for telephone advice.
            Right now it can be long queues.
            In case of emergency, contact 112. If you have advanced
            home care or palliative care at home,
            you should contact your healthcare unit instead.<br/><br/><br/>

            <button
                onClick={this.refreshThePage}
            >
              Do the test again
            </button>
          </div>
      );
    }
    else if (isEnd===true && totalScore<=16) {
      return (
          <div className="f3 br3 ba b--black-10  mw7 shadow-5 vh-75-ns center tc">
            <h1 > The self-assessment test result </h1>
            'You have not listed any symptoms of covid-19.
            Continue to wash your hands carefully and often and follow the guidelines and
            recommendations that the Public Health Authority and your region have developed.<br/><br/><br/>
            <div className='tc'>
            <button onClick={this.refreshThePage}>
              Do the test again
            </button>
            </div>
          </div>

      );
    }

    else {
      return (
          <div className="br3 ba b--black-10 mv4 w-auto-l w-50-m w-25-l mw6 shadow-5 center test ">
            <h1>{this.state.questions} </h1>

            {options.map((option, i) => (

                <a
                    href='#0'
                    key={i}
                    className="f3 br1 ba db link hover-dark-red ma4"
                    data-id={i}
                    onClick={() => this.checkAnswer(option)  }
                >
                  {option}
                </a>

            ))}
            {currentQuestion < data.length - 1 && (
                <div className='tc '>
                 <button
                    className='f3'
                    disabled={this.state.disabled}
                    onClick={this.nextQuestionHandler}
                 >
                  Next
                 </button>
                </div>
            )}
            {/* //adding a finish button */}
            {currentQuestion === data.length - 1 && (
                <div className='tc'>
                <button className="f3" onClick={this.finishHandler}>
                  Finish
                </button>
                </div>
            )}
          </div>
      );
    }
  }
}
export default CovidTest;