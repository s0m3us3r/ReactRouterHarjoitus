import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="App">
      <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/about"}>About </Link>
        <Link to={"/contact"}>Contact </Link>
      </nav>
      <Outlet />
    </div>
    </>
  )
}

export default App
