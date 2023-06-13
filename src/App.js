import React, {Component} from "react";
import GithubCorner from 'react-github-corner';
import Poll from 'react-polls';

import "./style.css";

const pollQuestion1 = 'react-poll useful ?'
const pollAnswers1 = [
{option: 'yes', votes: 23},
{option: 'no', votes: 2},
{option: 'i dont know', votes: 2}
]

const pollStyles1 = {
  questionSeparator: true,
  questionSeparatorWidth: 'question',
  questionBold: true,
  questionColor: '#303030',
  align: 'center',
  theme: 'purple'
}

const pollQuestion2 = 'what framework prefer ?'
const pollAnswers2 = [
  {option: 'React' , votes: 4},
  {option: 'Vue', votes: 3},
  {option: 'Angular' , votes: 1}
]

const pollStyles2 = {
  questionSeparator: false,
  questionSeparatorWidth: 'question',
  questionBold: false,
  questionColor: '#470D6',
  align: 'center',
  theme: 'blue'
}



export default class App extends Component {
state = {
  pollAnswers1: [...pollAnswers1],
  pollAnswers2: [...pollAnswers2]
}


handleVote = (voteAnswer, pollAnswers, pollNumber ) => {
  const newPollAnswers = pollAnswers.map(answer => {
   if(answer.option === voteAnswer) answer.votes++
    return answer;
  })

  if(pollNumber === 1) {
    this.setState({
      pollAnswers1: newPollAnswers
    })
  }
  else {
    this.setState({
      pollAnswers2: newPollAnswers
    })
  }
}

componentDidMount() {
  const {pollAnswers1, pollAnswers2} = this.state;
  this.autoAddVotes(pollAnswers1, 1);
  this.autoAddVotes(pollAnswers2, 2);
}

autoAddVotes = (pollAnswers, pollNumber) => {
setTimeout(() => {
  const choseAnswer = parseInt(Math.random() * 2, 10)
  this.handleVote(pollAnswers[choseAnswer].option, pollAnswers, pollNumber )
  this.autoAddVotes(pollAnswers, pollNumber);




}, Math.random() * 5000)
}









  render() { 
   const {pollAnswers1, pollAnswers2} = this.state;
  return (
    <div className='app'>
      <header className='header'>
     <img src={"https://raw.githubusercontent.com/viniciusmeneses/react-polls/ba9897427987d1e1c01d6c7b425bef8d39fc1cc3/example/src/assets/react-logo.svg"} className='logo' alt="React Logo" />
     <h1 className="name"> react poll</h1>

     </header>
     <main className='main'>
     <div>
     <Poll question={pollQuestion1} answers={pollAnswers1} onVote={voteAnswer => this.handleVote(voteAnswer, pollAnswers1)} customStyles={pollStyles1} noStorage  />
 
       </div>
       <div>
     <Poll question={pollQuestion2} answers={pollAnswers2} onVote={voteAnswer => this.handleVote(voteAnswer, pollAnswers2)} customStyles={pollStyles2} noStorage  />
 
       </div>
       </main>

       <GithubCorner
        href="https://github.com/gonzalote99"
        bannerColor="#303030"
        size={80}
        direction='rifght'
       />

    </div>
  )
   }
}
