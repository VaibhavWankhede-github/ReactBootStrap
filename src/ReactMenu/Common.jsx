import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import main1 from './img/main.png';



const Common = (props) => {
  return (
    <>
      <section id='header' className='d-flex align-item-center'>
        <div className="container-fluid nav-bg">
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column '>
                <h1>{props.name} <strong className='brand-name'>Wankhede Technical</strong></h1>
                <h2 className='mt-2'>
                  we are the team of talented Developer making website
                </h2>
                <div className='mt-3'>  
                    <NavLink to={props.visit} className='btn btn-outline-primary'>{props.btname}</NavLink>
                </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={main1} className='img-fluid-animated' alt="Common image" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Common;
