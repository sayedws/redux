import EditTask from "../components/EditTask"
import { ADD_NEW_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actiontype"


export const handleAdd=(newTask)=>{
return{
    type:ADD_NEW_TASK,
    payload:newTask

}



}
export const handleDelete=(ID)=>{
    return{
        type:DELETE_TASK,
        payload:ID
    }
}
export const handleComplete=(THEID)=>{
    return{
        type:COMPLETE_TASK,
        payload:THEID
    }
}
export const handleEdit=(editedTask)=>{
    return{
        type:EDIT_TASK,
        payload:editedTask
    }
}
export const filterTask = () => {
    return { type: FILTER_TASK };
  };