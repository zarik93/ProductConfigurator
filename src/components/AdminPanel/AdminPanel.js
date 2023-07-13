import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, InputNumber } from 'antd'
import { Link } from 'react-router-dom'
import { addNumber } from '../../store/reducers/auctionSlice'

const AdminPanel = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const number = parseInt(inputValue, 10)
    dispatch(addNumber(number))
    setInputValue('')
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
      <br></br>
      <br></br>
      {/* <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleUpdateInput}>Update Input</button> */}
      <form onSubmit={handleSubmit}>
        <Form.Item>
          <details>
            <div>
              <div></div>
              <div>
                <InputNumber value={1} />
                <br></br>
                <input
                  type="number"
                  value={inputValue}
                  onChange={handleChange}
                />
                <button type="submit">Add Number</button>
              </div>
            </div>
          </details>
        </Form.Item>
      </form>
    </div>
  )
}

export default AdminPanel
