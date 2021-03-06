import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Results } from './Results'

export const Pages = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/surfto-web-browser-react' element={<Navigate to='/search'/>} />
        <Route path='/search' element={<Results />} />
        <Route path='/image' element={<Results />} />
        <Route path='/news' element={<Results />} />
        <Route path='/videos' element={<Results />} />
      </Routes>
    </div>
  )
}
