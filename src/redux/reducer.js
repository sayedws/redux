import { ADD_NEW_TASK } from "./actiontype"



const init={
    todos:[]

};

export const taskReducer=(state=init,{type,payload})=>{
    switch (type) {
        case ADD_NEW_TASK:

        return{
            ...state,todos:[...state.todos,payload]
        }
        default:

        return state

    }
}