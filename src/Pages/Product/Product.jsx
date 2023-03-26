import React, { useEffect, useState } from 'react';
import Card from '../../Component/Card/Card';
import './Product.css';

function Product() {

    const [data,setData] = useState();

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products').then(res =>{
            return res.json();
        }).then(i =>{
            setData(i)
            console.log(i)
        })
    },[])

  return (
    <div>
       <div className="container" style={{marginTop:'90px'}}>
       <h1 className='text-center'>All product</h1>
       </div>

       <div className="container-fluid mt-5">
        <div className="row gy-4" >
            { data &&
                data.map(i =>{
                    return <Card
                        img={i.image}
                        title={i.category}
                        price={i.price}
                    />
                })
            }
        </div>
       </div>
    </div>
  )
}

export default Product