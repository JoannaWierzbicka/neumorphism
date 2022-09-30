import React from 'react'
import MainPage from './components/MainPage'

export const App = () => {
  const getStarted = () => {
    console.log('start form')
  }

  return (
    <div>
      <MainPage startForm={() => getStarted()}/>
    </div>
  )
}

export default App
