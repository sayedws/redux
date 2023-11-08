import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleAdd } from '../redux/action';

const AddnewTask = () => {
    const [action, setAction] = useState("hello");
    const dispatch=useDispatch();
    const handleSubmit=()=>{
        const task={
            id:Math.random(),action,isDone:false
            
        }
        dispatch(handleAdd)
        setAction("")


    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" value={action} onchange={e=>setAction(e.target.value)} />
            <button type='submit' >Add</button>
        </form>
    </div>
  )
}

export default AddnewTask