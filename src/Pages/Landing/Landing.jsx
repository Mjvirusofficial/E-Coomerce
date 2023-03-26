import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Categories from '../../Component/Categories/Categories';
import './Landing.css'
function Landing() {

  // const iteam = ['All Product',"Electronic",'Sport']
  const [data, setData] = useState();

  //https://fakestoreapi.com/products/categories

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories').then((res) => {
      return res.json().then(i => {
        setData(i);
        console.log(i)
      })
    })
  }, [])

  

  const navigate = useNavigate()

  
  useEffect(() =>{
      let username = sessionStorage.getItem('user');
      if(username === '' || username === null ){
        navigate('/auth')
      }
  },[])

  const url = 'https://fakestoreapi.com';
  // const [d,setD] = useState;

  // useEffect(()=>{
  //     fetch(url).then(r =>{
  //       return r.json()
  //     }).then(i =>{
  //       console.log(i)
  //     })
  // },[])

  return (
    <div>
      <div className=" container-fluid text-center mb-5">
        <h1 className='banner ' style={{marginTop:'90px'}} >Welcome to online Shoping...</h1>
      </div>

      <div className="m-5">
        <div className="row gy-3">
        <Categories
                Categories={'All Product'}
                link='/product'
              />
          {data &&
            data.map((i,index) => {
              return <Categories
                Categories={i}
                link='product'
              />
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Landing