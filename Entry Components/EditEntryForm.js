import React, {useState} from 'react'

export const EditEntryForm = ({editEntry, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        editEntry(value, task.id);
        setValue("");
    }
  return (
    <form className='EntryForm' onSubmit={handleSubmit}>
        <input type="text" className='entry-input' value={value} placeholder="Update Entry" onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='entry-btn'>Update Entry</button>
    </form>
  )
}
