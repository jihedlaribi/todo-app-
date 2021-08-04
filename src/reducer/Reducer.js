import { EDIT_TODO,ADD_TODO, COMPLET_TODO, DELETE_TODO } from "../Type/actionType";
const intialState = {todos:[]}
const reducer = (state=intialState,{type,payload}) => {
    switch (type) {
        case ADD_TODO:
            
           return  {
             ...state, todos: [...state.todos, payload] 
            };
            case DELETE_TODO:
                return {   
                    ...state,todos:state.todos.filter((el)=> el.id !== payload)
                }
                 case COMPLET_TODO:
                     return {
                         ...state,todos:state.todos.map((el) =>(el.id===payload)? {...el,isDone:!el.isDone}:el
                             
                        )
                     }
                     case EDIT_TODO:
                         return ({
                            ...state,todos:state.todos.map((el) => (el.id === payload.id)? {...el,todo:payload.value}:el
                                
                              )  })
        default:
           return state;
    }
    
}

export default reducer;