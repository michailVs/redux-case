import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CaseList from './CaseList'
import Inventory from './Inventory'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<CaseList/>}/>
        <Route path='/inv' element={<Inventory/>}/>
        <Route path='*' element={<Navigate to='/' replace/>}/>
    </Routes>
  )
}

export default AppRouter