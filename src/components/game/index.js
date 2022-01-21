/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import PopupComponent from '../popup'
// import {appContainer, scoreContainer} from './styledComponents'
import './index.css'

export default class Game extends Component {
  state = {
    count: 0,
    // eslint-disable-next-line react/destructuring-assignment
    choicesList: this.props.list,
    view: false,
    resultText: '',
    yourChoice: '',
    randomChoice: '',
  }

  componentDidMount() {
    const {list} = this.props
    this.setState({
      choicesList: list,
    })
  }

  scoreFunciton = prop => {
    const {choicesList} = this.state
    const randomItem =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    console.log(randomItem.id)
    let resultText
    let randomChoice
    let yourChoice
    if (prop === 'SCISSORS') {
      if (randomItem.id === 'ROCK') {
        resultText = 'YOU LOSE'
        randomChoice = randomItem.imageUrl
        yourChoice = choicesList[1].imageUrl
        this.setState(prevState => ({
          count: prevState.count - 1,
          view: true,
          resultText,
          randomChoice,
          yourChoice,
        }))
      } else if (randomItem.id === 'SCISSORS') {
        resultText = 'IT IS DRAW'
        randomChoice = randomItem.imageUrl
        yourChoice = choicesList[1].imageUrl

        this.setState({view: true, resultText, randomChoice, yourChoice})
      } else if (randomItem.id === 'PAPER') {
        resultText = 'YOU WON'
        randomChoice = randomItem.imageUrl
        yourChoice = choicesList[1].imageUrl
        this.setState(prevState => ({
          count: prevState.count + 1,
          view: true,
          resultText,
          randomChoice,
          yourChoice,
        }))
      }
      console.log('scissor clicked')
    } else if (prop === 'ROCK') {
      if (randomItem.id === 'PAPER') {
        resultText = 'YOU LOSE'
        randomChoice = randomItem.imageUrl
        yourChoice = choicesList[0].imageUrl
        this.setState(prevState => ({
          count: prevState.count - 1,
          view: true,
          resultText,
          randomChoice,
          yourChoice,
        }))
      } else if (randomItem.id === 'ROCK') {
        resultText = 'IT IS DRAW'
        randomChoice = randomItem.imageUrl
        yourChoice = choicesList[0].imageUrl
        this.setState({view: true, resultText, randomChoice, yourChoice})
      } else if (randomItem.id === 'SCISSORS') {
        resultText = 'YOU WON'
        randomChoice = randomItem.imageUrl
        yourChoice = choicesList[0].imageUrl
        this.setState(prevState => ({
          count: prevState.count + 1,
          view: true,
          resultText,
          randomChoice,
          yourChoice,
        }))
      }
      console.log('rock Clicked')
    } else if (prop === 'PAPER') {
      if (randomItem.id === 'SCISSORS') {
        resultText = 'YOU LOSE'
        randomChoice = randomItem.imageUrl
        yourChoice = choicesList[2].imageUrl
        this.setState(prevState => ({
          count: prevState.count - 1,
          view: true,
          resultText,
          randomChoice,
          yourChoice,
        }))
      } else if (randomItem.id === 'PAPER') {
        resultText = 'IT IS DRAW'
        randomChoice = randomItem.imageUrl
        yourChoice = choicesList[2].imageUrl
        this.setState({
          view: true,
          resultText,
          randomChoice,
          yourChoice,
        })
      } else if (randomItem.id === 'ROCK') {
        resultText = 'YOU WON'
        randomChoice = randomItem.imageUrl
        yourChoice = choicesList[2].imageUrl
        this.setState(prevState => ({
          count: prevState.count + 1,
          view: true,
          resultText,
          randomChoice,
          yourChoice,
        }))
      }
      console.log('paper clicked')
    }
  }

  resetFunction = () => {
    this.setState({
      view: false,
    })
  }

  render() {
    const {
      choicesList,
      count,
      view,
      resultText,
      randomChoice,
      yourChoice,
    } = this.state
    // console.log('props', choicesList)
    return (
      <div className="appContainer">
        <div className="scoreContainer">
          <div>
            {/* <ul>
              {choicesList.map(e => (
                <li key={e.id} className="listId">
                  {e.id}
                </li>
              ))}
            </ul> */}
          </div>
          <h1>Rock Paper Scissors</h1>
          <div className="scoreCard">
            <p className="scoreItem">Score</p>
            <p className="scoreItem">{count}</p>
          </div>
        </div>
        {view ? (
          <div className="resultViewCard">
            <div className="imageCard">
              <div>
                <p>You</p>
                <img className="image1" src={yourChoice} alt="your choice" />
              </div>
              <div>
                <p>Opponent</p>
                <img
                  className="image1"
                  src={randomChoice}
                  alt="opponent choice"
                />
              </div>
            </div>
            <p>{resultText}</p>
            <button type="button" onClick={this.resetFunction}>
              PLAY AGAIN
            </button>
          </div>
        ) : (
          <div className="game-items">
            <div className="upper">
              <button type="button" data-testid="rockButton">
                <img
                  alt={choicesList[0].id}
                  src={choicesList[0].imageUrl}
                  className="image1"
                  onClick={() => this.scoreFunciton('ROCK')}
                />
              </button>
              <button type="button" data-testid="scissorsButton">
                <img
                  alt={choicesList[1].id}
                  src={choicesList[1].imageUrl}
                  className="image1"
                  onClick={() => this.scoreFunciton('SCISSORS')}
                />
              </button>
            </div>
            <div className="lower">
              <button type="button" data-testid="paperButton">
                <img
                  alt={choicesList[2].id}
                  //   src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
                  src={choicesList[2].imageUrl}
                  className="image1"
                  onClick={() => this.scoreFunciton('PAPER')}
                />
              </button>
            </div>
          </div>
        )}

        <div className="buttonCard">
          <PopupComponent />
        </div>
      </div>
    )
  }
}
