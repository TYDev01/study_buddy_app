import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
import {Dashboard} from './pages/Dashboard'
import {SideBar} from './components/commonComponents/SideBar'
import {UpgradePackage} from './components/commonComponents/UpgradePackage'
import {DashHeader} from './components/commonComponents/DashHeader'
import {ModalsHandler} from './components/commonComponents/ModalsHandler'
import {DashboardContents} from './components/commonComponents/DashboardContents'
// import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/Signup" element={<Signup />}/> */}
          {/* <Route path="/Login" element={<Login />}/> */}
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/SideBar" element={<SideBar />}/>
          <Route path="/UpgradePackage" element={<UpgradePackage />}/>
          <Route path="/DashHeader" element={<DashHeader />}/>
          <Route path="/DashboardContents" element={<DashboardContents />}/> 
          <Route path="/ModalsHandler" element={<ModalsHandler />}/> 
        </Routes>
      </Router>
    </div> 
  )
}

export default App
