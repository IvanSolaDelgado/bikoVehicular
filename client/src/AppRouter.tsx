import { Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/home'
import Details from './components/pages/details/Details'
import { Gif } from './core/domain/Gif'
import { FC } from 'react'

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}
