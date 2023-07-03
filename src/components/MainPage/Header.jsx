import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <h1>Delivery calculator</h1>
      <Link to="/admin">
        <Button>Go to Admin</Button>
      </Link>
    </>
  )
}

export default Header
