import { Component } from 'react'

export class Result extends Component {
  render() {
    return (
      <div className='container3 flex'>
        <div className="result">Result</div>
        <div className="res-box flex">
            <div className="quote">You need more practice!</div>
            <div className="score">Your score is 20 %</div>
            <div className="line flex"><span>Total number of questions</span><span>15</span></div>
            <div className="line flex"><span>Number Of attempted questions</span><span>9</span></div>
            <div className="line flex"><span>Number of correct answers</span><span>3</span></div>
            <div className="line flex"><span>Number Of wrong answers</span><span>6</span></div>
        </div>
        <div className="buttons2 flex">
            <div className="again-button button4">Play Again</div>
            <div className="home-button button4">Back to home</div>
        </div>
      </div>
    )
  }
}

export default Result
