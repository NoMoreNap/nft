import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App';
import { Info } from './blocks/info';

export const AppRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/info' element={<Info />}></Route>
        </Routes>
    )
}