import { FC } from 'react'
import { AppRouter } from './AppRouter'
import { Gif } from './core/domain/Gif'
import './styles/index'

const App = () => {
  return (
    <div className="app">
      <AppRouter />
    </div>
  )
}

export default App
