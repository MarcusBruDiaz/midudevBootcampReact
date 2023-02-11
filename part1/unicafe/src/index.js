import React , {useState} from "react";
import { createRoot } from 'react-dom/client';



const Display = (props)=>{

    if(props.all === 0){
        return(
            <>
                Por favor de una opinion
            </>
        )
    }
    return(
        <>
            <Statistics good={props.good}  neutral={props.neutral} bad={props.bad}/>
        </>   
    )
} 



const Header = (props) =>{

    return (
        <h1>{props.text}</h1>
    )
}



const Button = (props)=>{
    return(
        <>
            <button onClick={props.handleClick}>{props.text}</button>
        </>
    )
}



const Statistic = ({text,value})=>{

    return(
                <table>
                    <tbody>
                        <tr>
                            <td>{text}: {value}</td>
                        </tr>
                    </tbody>
                </table>
    )
}


const Statistics = (props)=>{

    const all = props.good + props.neutral + props.bad
    const average = all/3
    const positive = props.good/all*100

    return(
        <>
            <Statistic text="good" value ={props.good} />
            <Statistic text="neutral" value ={props.neutral} />
            <Statistic text="bad" value ={props.bad} />
            <Statistic text="all" value ={all} />
            <Statistic text="average" value ={average} />
            <Statistic text="positive" value ={positive} />
           

        </>
    )

}



const App = ()=>{
    const [good , setGood] = useState(0)
    const[neutral , setNeutral]= useState(0)
    const[bad , setBad]= useState(0)


    return(
        <>     
            <Header text='Give  feedback'/>

            <Button  handleClick={()=>setGood(good+1)} text='good'/>
            <Button text='neutral' handleClick={()=>setNeutral(neutral+1)} />
            <Button text='bad'  handleClick={()=>setBad(bad+1)}/>

            <Header text='Statistics'/>

            <Display good={good} neutral={neutral} bad={bad} all={good+neutral+bad}/>
          
        </>
    )


}




const container= document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)

