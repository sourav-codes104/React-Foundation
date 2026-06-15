import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='card-Container'>
      <Card name='Sourav' img='https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' age='22'/>
      <Card name='Mayank' img='https://plus.unsplash.com/premium_photo-1770447611992-de6a1d090367?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D' age='25'/>
      <Card name='Ram' img='https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8' age='27'/>
      <Card name='Shankar' img='https://plus.unsplash.com/premium_photo-1726876978010-01df8b0aee35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8' age='21'/>
    </div>
  )
}

export default App
