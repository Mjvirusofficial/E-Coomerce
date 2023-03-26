import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.css';

function Categories(mj) {
    return (
        <div className="col-12 col-md-6 col-lg-3 ">
            <NavLink to={mj.link}  style={{color:'white',textDecoration:'none',textTransform:'capitalize'}}>
            <div className=''>
                <div className="item">
                    <div className='text-center'><span  style={{textTransform:'capitalize'}}>{mj.Categories}</span></div>
                </div>
            </div>
            </NavLink>
        </div>
    )
}

export default Categories

