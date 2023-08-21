import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';




const Carrier = () => {
  return (
    <>
   <div className="container-fluid nav-bg">
        <div className='row'>
          <div className="col-10 mx-auto">
            <h1>This is a Carrier Page </h1>
            <h2 className='bg-danger'>work in progress</h2>
            <div className='mt-3'>
              <NavLink to="/" className='btn btn-outline-primary'>Go To Home</NavLink>
            </div>



          </div>
        </div></div>
    </>    
  );
}

export default Carrier;
