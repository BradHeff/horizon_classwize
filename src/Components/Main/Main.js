import React from 'react';
import './main.css'

const Main = (props) => {
  return (
        <div className='intro'>
            <div className='contents'>
                <div className='container grid-lg'>
                    <div className='columns justify-content-center align-items-center'>
                        <div className='column col-lg-12 col-8 text-center panel'>
                            <div className='info'>
                                <h3>Active Time: <span>9am - 3pm</span></h3>
                                <h3>Status: <span className={props.status}>{props.status}</span></h3>
                            </div>
                        <h1>Contents</h1>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
  );
}

export default Main;