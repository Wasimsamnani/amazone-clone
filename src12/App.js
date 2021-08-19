import React,{useState,useEffect} from 'react'
import {Button,formControl,Input,InputLabel} from '@material-ui/core';
import db from './Firebase';

const App = (props) => {
  const [todo,settodo] = useState([]);
  const [input,setinput] = useState("");
  const Changehandeler = (e) => {
    setinput(e.target.value)
  }
  useEffect(() => {
    db.collection('Todos').onSnapshot(snapshot=>{
    settodo(snapshot.docs.map(doc=>doc.data().todo))
    })
  },[input])
  const Clickhandeler = (e) => {
    e.preventDefault();
    db.collection('Todos').add({
      todo:input
    })
    setinput("")
  }
  return (
    <div>
    <center>
      <h1>Hello Someone</h1>
      <formControl>
        <InputLabel>Add Something</InputLabel>
      <Input type="text" value={input} onChange={Changehandeler}/>
    </formControl><br/>
    <Button style={{backgroundColor: "lightgreen"}} onClick={Clickhandeler}  disabled={!input}>Add to List</Button>
      <div>
        <ul>
          {todo?.map(list=>(<li>{list}</li>))}
        </ul>
      </div>
      </center>
    </div>
  )
}

export default App
