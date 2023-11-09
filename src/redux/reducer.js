import { ADD_NEW_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actiontype"



const init={
    todos:[],
    filter: false,

};

export const taskReducer=(state=init,{type,payload})=>{
    switch (type) {
        case ADD_NEW_TASK:

        return{
            ...state,todos:[...state.todos,payload],

        };
        case DELETE_TASK:
        return{
            ...state,todos:state.todos.filter(el=>el.id!==payload)

        };
        case COMPLETE_TASK:
            return{
                ...state,todos:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
            }
            case EDIT_TASK:
                return{
                    ...state,todos:state.todos.map(el=>el.id===payload.id?payload:el)
                }
                case FILTER_TASK:
                    return { ...state, filter: !state.filter };
                
                
        default:

        return state

    }
}