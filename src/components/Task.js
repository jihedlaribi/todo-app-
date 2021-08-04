import React from "react";

import { useDispatch } from "react-redux";
import { complet, delt } from "../action/Action";
import { EditTask } from "./EditTask";
export const Task = ({ item }) => {
  const dispatch = useDispatch()
  return (
    
<div>
<div className='input-item'>
<input className={item.isDone ? "Done" : "none"} type="text" id="form11" class="form-control" placeholder={item.todo} disabled/>
</div>
     <div className="icon">
       
        {/* complete */}
        <i class="fas fa-check-square fa-2x" onClick={() =>  dispatch(complet(item.id))
          
        }></i>
        <EditTask item={item}/>
        {/* delete */}
        <i class="fas fa-trash fa-2x" onClick={()=> dispatch(delt(item.id))}></i>
        </div>
     
    
    
      </div>
  );
};
