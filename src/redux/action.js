import EditTask from "../components/EditTask"
import { ADD_NEW_TASK, COMPLETE_TASK, DELETE_TASK } from "./actiontype"


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
        type:EditTask,
        payload:editedTask
    }
}