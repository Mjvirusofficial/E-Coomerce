import React from 'react'

function Card(mj) {



    return (
        <>
            <div className="col-6 col-md-4 col-lg-3 " >
            <div className="card" >
                <img src={mj.img} className='card-img-top ' style={{height:'300px'}}  alt="" srcset="" />
                <div className="card-body">
                    <h4 className='card-title' style={{color:'black',textTransform:'capitalize'}}>{mj.title}</h4>
                    <p className='card-title'  style={{color:'black'}}>${mj.price}</p>
                </div>
            </div>
        </div>
            {/* <div className="col-6 col-md-4 col-lg-3 ">

                <img src={mj.img} class="card-img-top cardimg" alt="..." />
                <h4 className="title">{mj.title}</h4>
                <h4 className="title">{mj.price}</h4>

            </div> */}
        </>
    )
}

export default Card;