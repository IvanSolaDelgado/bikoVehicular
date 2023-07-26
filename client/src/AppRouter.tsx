import { Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/home'
import Details from './components/pages/details/Details'

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details:name" element={<Details />} />
    </Routes>
  )
}
