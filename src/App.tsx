import React, { useCallback, useReducer, useRef } from 'react';
import './App.css';
interface Todo{
  id: number,
  text: string
}

type ActionType ={type: 'ADD'; text: string} | {type: 'REMOVE'; id:number}
function App() {
  //UseReducer
  function reducer (state : Todo[], action: ActionType){
      switch(action.type){
       case 'ADD':
         return[
           ...state,
           {
             id: state.length,
             text: action.text
           }
         ]
         case 'REMOVE':
           return state.filter(({id})=> id!== action.id)
      }
  }
  const [todos,dispatch] = useReducer(reducer, [])

  const newTodoRef = useRef<HTMLInputElement>(null)
  //useCallback
  const onAddTodo = useCallback(()=>{
      if(newTodoRef.current){
        dispatch({
          type: 'ADD',
          text: newTodoRef.current.value
        })
        newTodoRef.current.value = ''
      }
  }, [])
 
  return (
    <div className="App">
      <h2>TODO APPLICATION</h2>
      <input type="text" ref={newTodoRef} />
      <button className='btn btn-success px-3' onClick={onAddTodo}>Add</button>
      {
        todos.map((todo)=>(
          <div key={todo.id}><h4>{todo.text}</h4>
            <button className='btn btn-danger' onClick={()=> dispatch({type: 'REMOVE', id: todo.id})}>Remove</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
