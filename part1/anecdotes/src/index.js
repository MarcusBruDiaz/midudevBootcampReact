import React , {useState} from "react";
import { createRoot } from 'react-dom/client';






const Button = (props)=>{
  return(
      <>
          <button onClick={props.handleClick}>{props.text}</button>
      </>
  )
}


const Header = (props) =>{

  return (
      <h1>{props.text}</h1>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0
  })

  

  const modifica = ()=>{


    if(selected === 0){
      const newVotes = {
        ...votes,
        0:votes[0] +1
      }
      setVotes(newVotes)
    }if(selected===1){
      const newVotes = {
        ...votes,
        1:votes[1] +1
      }
      setVotes(newVotes)
    }if(selected===2){
      const newVotes = {
        ...votes,
        2:votes[2] +1
      }
      setVotes(newVotes)
    }if(selected===3){
      const newVotes = {
        ...votes,
        3:votes[3] +1
      }
      setVotes(newVotes)
    }if(selected===4){
      const newVotes = {
        ...votes,
        4:votes[4] +1
      }
      setVotes(newVotes)
    }if(selected===5){
      const newVotes = {
        ...votes,
        5:votes[5] +1
      }
      setVotes(newVotes)
    }
  }

  const keys = Object.values(votes)

  


  return (
    <div>

      <Header text='Anecdote of the day'/>
      <div>
      <p>
        {props.anecdotes[selected]} 
      </p>
      <p>
        has {votes[selected]} votes
      </p>
      </div>

           
      <Button  handleClick={modifica} text='Vote'/>
      <Button  handleClick={()=>setSelected(Math.floor(Math.random()*props.anecdotes.length))} text='next anecdote'/>

      <Header text='Anecdote with most votes'/>
      <p>
      {props.anecdotes[ keys.indexOf(Math.max(...keys)) ]}
      </p>
      <p>
        has {votes[keys.indexOf(Math.max(...keys))]} votes
      </p>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]





const container= document.getElementById('root')
const root = createRoot(container)
root.render(<App anecdotes={anecdotes}  />)


