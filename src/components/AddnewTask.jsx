import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleAdd } from '../redux/action';

const AddnewTask = () => {
    const [action, setAction] = useState("hello3");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
e.preventDefault()
        const task={
            id:Math.random(),action,isDone:false
            
        }
        dispatch(handleAdd(task))
        setAction("")


    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" value={action} onChange={e=>setAction(e.target.value)} />
            <button type='submit' >Add</button>
        </form>
    </div>
  )
}

export default AddnewTask