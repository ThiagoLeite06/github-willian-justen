import { useState } from 'react'
import { Post } from './Post'
import './global.css'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Post name="Thiago" age="36" />
    </>

  )
}

export default App
