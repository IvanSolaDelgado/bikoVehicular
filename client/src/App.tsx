import './styles/reset.css'
import './styles/reboot.css'
import { GifList } from './components/GifList'
import { useState, useEffect } from 'react'

const App = () => {
  return (
    <div className="App">
      <GifList />
    </div>
  )
}

export default App
