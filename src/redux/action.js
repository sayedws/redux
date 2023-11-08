import { ADD_NEW_TASK } from "./actiontype"


export const handleAdd=(newTask)=>{
return{
    type:ADD_NEW_TASK,
    payload:newTask

}



}