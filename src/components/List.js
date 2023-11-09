import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

const List = () => {
    const {todos}=useSelector(state=>state)


  return (
    <div>
        {
            React.Children.toArray(todos.map(el=><TaskCard task={el}/> ))
        }
    </div>
  
  )
}

export default List