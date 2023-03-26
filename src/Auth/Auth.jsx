import React, { useEffect, useState } from 'react';
import './Auth.css';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Auth() {

    const [show, setShow] = useState(false)
    const [data, setData] = useState('')

    const navigate = useNavigate()
    function WhenClick() {
        setShow(!show)
    }

    useEffect(() =>{
      sessionStorage.clear()
  },[])

    const url = 'http://localhost:3000/user';

    function Register(){
        fetch(url,{
            method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-Type': 'application/json'
      }
    }).then(() => {
        console.log(data)
        setShow(!show)
      })
    }
   

    function Login(){
       fetch(url).then(res =>{
        return res.json();
       }).then(i =>{
        if(i.username === data.username){
            if(i.password === data.password){
                alert('Login Successfully')
                sessionStorage.setItem('user',i.username)
                navigate('/')
            }

            else{
                alert('Enter valid password')
            }
        }

        else{
            alert('Enter valid username')
        }
       })
    }



    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className='text-center mt-4 '>Welcome to MyShop</h1>
                </div>

               <div className="container">
                <div className="row">
                    <div className="col-10 col-lg-6 mx-auto">
                    <div className="inof">
                    <h3 className='text-center m-4'>{show ? 'Register' : 'Login'}</h3>
                </div>
                <div className="input-group col">
                    <input onChange={(e) =>{setData({...data , username : e.target.value})}} type="text" className='form-control' autoFocus autocomplete='off' placeholder='Username' />
                </div>
                {show && <div className="input-group">
                    <input onChange={(e) =>{setData({...data, email : e.target.value})}} type="email" className='form-control' placeholder='Email' />
                </div>}
                <div className="input-group">
                    <input onChange={(e) => {setData({...data , password : e.target.value})}} type="password" className='form-control' placeholder='Password' />
                </div>
                <div className="input-group">
{
    show ? <button onClick={Register} type="button" className='login '>{show ? "Register" : "Login"}</button> : <button onClick={Login} type="button" className='login '>{show ? "Register" : "Login"}</button>
} <span onClick={WhenClick} className='auth' style={{ margin: '10px' }}>{
                        show ? 'Already have an account? Login' : "Don't have an account? Register"
                    }</span>
                </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Auth