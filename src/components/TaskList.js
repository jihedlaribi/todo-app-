import React from 'react'


import { Task } from './Task'

export const TaskList = ({filter}) => {
    

    return (
        <div>
            {filter.map((item)=> <Task item={item} key={item.id}/>
            )}
        </div>
    )
}
