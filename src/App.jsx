import SideBar from "./component/AdminProfile/SideBar/SideBar.jsx"
import List from "./component/AdminProfile/List"
import Tableau from "./component/Employees/Tableau.jsx"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './component/Login/Login';
// import LineChart from "./component/AdminProfile/LineChart";
import {UserData} from './component/AdminProfile/data'
import searchBar from "./component/Employees/searchBar.jsx";

function App() {
  return (
    
  <div className="">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Employees" element={[<SideBar/>,<Tableau/>]}></Route>
        <Route path="/AdminProfile" element={[<SideBar/>, <List chartData={UserData}/>  ]}></Route>
        <Route path="/Admin" element={[<searchBar/>]}></Route>
        

      </Routes>
      </BrowserRouter>
        
      
      
    </div>
  )
}


export default App