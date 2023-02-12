import React , {useState} from "react";
import { createRoot } from 'react-dom/client';




const Display = (props)=>{

    return(
      <>
          <MoreVote anecdotes={props.anecdotes}  votes={props.votes}/>
      </>
    )
  
}

const Button = (props)=>{
  return(
      <>
          <button onClick={props.handleClick}>{props.text}</button>
      </>
  )
}




const MoreVote =(props)=>{
  console.log(props.anecdotes[0])
  return(
    <>
      <p>
          {props.anecdotes[props.votes.indexOf(Math.max(...props.votes)) ]}
      </p>
      <p>
          has {props.votes[props.votes.indexOf(Math.max(...props.votes))]} votes
      </p>
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
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))


  const modificar = ()=>{
    console.log(votes)
    const newVotes = votes.map((c,i)=>{
      if(i === selected){
        return c + 1
      }else{
        return c
      }
    })
    setVotes(newVotes)
  }


  return (
    <>
      <Header text='Anecdote of the day'/>
      <div>
        <p>
          {props.anecdotes[selected]} 

        </p>
        <p>
          has {votes[selected]} votes
        </p>
      </div>
      <Button handleClick={modificar} text='Votes'/>
      <Button  handleClick={()=>setSelected(Math.floor(Math.random()*props.anecdotes.length))} text='next anecdote'/>
      <Header text='Anecdote with most votes'/>
      <Display anecdotes={anecdotes} votes={votes} />

    </>
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






  /*const [votes, setVotes] = useState({
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
  /*console.log(keys)*/

  
/*<Button  handleClick={modifica} text='Vote'/>
<Display anecdotes={anecdotes} keys={keys} votes={votes}/>


morebotes

 {props.anecdotes[props.keys.indexOf(Math.max(...props.keys)) ]}

 has {props.votes[props.keys.indexOf(Math.max(...props.keys))]} votes

*/