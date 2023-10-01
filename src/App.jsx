import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Detalle from './pages/Detalle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id/' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
