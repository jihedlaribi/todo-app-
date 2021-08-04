import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../action/Action';


export const AddTask = () => {
   const dispatch = useDispatch();
   const [todo, setTodo] = useState('')
   const newTodo=(() => {
       if (todo) {
           dispatch(addTodo({todo:todo,isDone:false,id:Math.random()}));setTodo('')
       }else alert('add todo')
       
   })
   
    return (
        <div  className='input'>
            <h1>what is your plane today?</h1>
                <input className='text-imput'
            type='text'
           placeholder='enter your todo'
           name='todo'
           onChange={(e) => setTodo(e.target.value)} 
           value={todo}/>

           <button onClick={newTodo} className='btn'>add</button>
           
        
        </div>
    )
}
