import { Component } from 'react'
import questions from './resources/quizQuestion.json'
// console.log(questions)

export class Quiz extends Component {
  constructor(){
    super()
    this.state = {
      num: 0
    }
  }

  nextQues(){
    if(this.state.num==14){
      this.setState({
        num: 0
      })
    }
    else{
      this.setState({
        num: this.state.num+1
      })
    }
  }

  prevQues(){
    if(this.state.num==0){
      this.setState({
        num: 14
      })
    }
    else{
      this.setState({
        num: this.state.num-1
      })
    }
  }

  exitQuiz(){
    alert("Are you sure you want to quit ?")
  }

  render() {
    return (
      <div className='container2 flex'>
        <div className="head">Question</div>
        <div className="num">{this.state.num + 1} of 15</div>
        <div className="question">{questions[this.state.num].question}</div>
        <div className="grid">
            <div className="option">{questions[this.state.num].optionA}</div>
            <div className="option">{questions[this.state.num].optionB}</div>
            <div className="option">{questions[this.state.num].optionC}</div>
            <div className="option">{questions[this.state.num].optionD}</div>
        </div>
        <div className="buttons1 flex">
            <div className="button1 button" onClick={() => this.prevQues()}>Previous</div>
            <div className="button2 button" onClick={() => this.nextQues()}>Next</div>
            <div className="button3 button" onClick={() => this.exitQuiz()}>Quit</div>
        </div>
      </div>
    )
  }
}

export default Quiz
