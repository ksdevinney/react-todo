import { FaTimes } from 'react-icons/fa'
import React from 'react'

function Task({ task }) {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes style={{ color: 'red' }} /> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
