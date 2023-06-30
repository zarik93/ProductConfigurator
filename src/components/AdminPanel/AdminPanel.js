import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateInputValue } from '../../store/actions/formActions'

function AdminPanel() {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleUpdateInput = () => {
    dispatch(updateInputValue(inputValue))
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleUpdateInput}>Update Input</button>
    </div>
  )
}

export default AdminPanel
