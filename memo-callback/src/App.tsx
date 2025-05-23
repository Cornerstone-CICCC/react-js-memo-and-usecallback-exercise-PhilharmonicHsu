import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Profile firstname='Phil' lastname='Hsu' />
        <ProductList />
      </div>
    </>
  )
}

export default App
