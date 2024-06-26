import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Entry = ({task, toggleComplete, deleteEntry, editEntry}) => {
  return (
    <div className='Entry'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={() => editEntry(task.id)}/>
            <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={() => deleteEntry(task.id)}/>
        </div>
    </div>
  )
}
