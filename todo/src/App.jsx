import React,{useState} from 'react';
import './App.css';

function App() {

  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
    

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
        <hr size="5px" width="110px" />

      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id: Date.now(), Text: toDo, status: false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((obj)=>{

        return (
          <div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                console.log(obj);
                console.log(e.target.checked);
                setToDos(toDos.filter(obj2=>{
                  if(obj2.id === obj.id)
                    obj2.status = e.target.checked
                  return obj2 
                }))
                
              }} value={obj.status} type="checkbox" name="" id={obj.id} />
              <p>{obj.Text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
        )  
        })}

        <h2>Active Task</h2>
        <hr size="5px" width="100px" />
        { toDos.map((obj)=>{
          if(obj.status){
            return ( <h3>{obj.Text}</h3> )  
          }
          return null
        })}
      </div>
    </div>
  );
}

export default App;