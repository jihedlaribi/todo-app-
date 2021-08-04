
import './App.css';
import { AddTask } from './components/AddTask';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React,{ useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TaskList } from './components/TaskList';

function App() {
  const [status, setStatus] = useState('all')
  const [filter, setFilter] = useState([])
  const todos = useSelector(state => state.todos)
    
  useEffect(() => {
    handelFilter()
  }, [status,todos])
  
   const handelFilter = () => {

       switch (status) {
           case 'completed':
            
              setFilter(todos.filter((el)=> el.isDone ===true))
              break;
               case 'incompleted':
                   setFilter(todos.filter((el)=> el.isDone ===false))
break;
           default:
             setFilter(todos)
             
       }
   }

  return (
    <div className="App">
<AddTask/>
<TaskList filter={filter}/>
<select onChange={e => setStatus(e.target.value)} className='select'>
        <option>all</option>
        <option>completed</option>
        <option>incompleted</option>
      </select>
      
    </div>
  );
}

export default App;
