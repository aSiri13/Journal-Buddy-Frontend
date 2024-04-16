import React, {useState} from 'react'

export const EntryForm = ({addEntry}) => {
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry(value);
        setValue("");
    }
  return (
    <form className='EntryForm' onSubmit={handleSubmit}>
        <input type="text" className='entry-input' value={value} placeholder="Start a diary entry..." onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='entry-btn'>Add Entry</button>
    </form>
  )
}
