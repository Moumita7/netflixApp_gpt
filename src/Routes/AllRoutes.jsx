
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
// import Body from '../Components/Body'
import Browse from '../Components/Browse'
// import Body from '../Components/Body'

const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Login/>}/>
    {/* <Route path="/" element={<Body/>}/> */}
    <Route path="/browse" element={<Browse/>}/>


    {/* <Route path="/login" element={<Login/>}/> */}
  </Routes>
  )
}

export default AllRoutes