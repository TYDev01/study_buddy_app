import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
// import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
      </Router>
    </div> 
  )
}

export default App
