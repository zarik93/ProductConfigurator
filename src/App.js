import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminPanel from './components/AdminPanel/AdminPanel'
import MainPage from './components/MainPage/MainPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin" element={<AdminPanel />} />
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
