import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import './Navbar.css';
function Navbar() {

  let [user, setUser] = useState('Guest');
  // const navigate = useNavigate()

  useEffect(() =>{
    const username = sessionStorage.getItem('user');
    username && setUser(username);
  },[user])


  function Logout(){
    setUser('Guest')
    sessionStorage.clear()
    
  }

  return (
    <div>

    <div className="container-fluid" style={{height:'10vh',backgroundColor:'black'}}>
      <div className="navbar">
        <div className="logo">
          <NavLink className='text-decoration-none' to='' ><h1>Mjvirusofficial</h1></NavLink>
        </div>
        <div className="user-action">
        <NavLink className='text-decoration-none' to='' ><span>Cart</span></NavLink>
        <NavLink className='text-decoration-none' to='' ><span>{user}</span></NavLink>
        {
          user === 'Guest' ? <NavLink className='text-decoration-none' to='/auth'><span >Login</span></NavLink> : <NavLink className='text-decoration-none' to='/auth' ><span onClick={Logout}>Logout</span></NavLink>
        }
        </div>
      </div>
    </div>






        {/* <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink className="navbar-brand custom-header" id='name' to="/"><span className='off'>Mjvirusofficial</span></NavLink>
    <button className="navbar-toggler " style={{color:'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " style={{color:'white'}}></span>
    </button>
    <div className="collapse navbar-collapse user-action" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" style={{color:'white',fontSize:'2rem',marginRight:'80px'}} aria-current="page" to="/">Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" style={{color:'white',fontSize:'2rem',marginRight:'80px'}} aria-current="page" to="/">Guest</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" style={{color:'white',fontSize:'2rem',marginRight:'80px'}} aria-current="page" to="/">Login</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link active" style={{color:'white'}} aria-current="page" to="/project">Project</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" style={{color:'white'}} aria-current="page" to="/study">Study</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" style={{color:'white'}} aria-current="page" to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" style={{color:'white'}} aria-current="page" to="/contact">Contact us</NavLink>
        </li> 
      </ul>
    </div>
  </div>
</nav> */}

    </div> 
  )
}

export default Navbar;