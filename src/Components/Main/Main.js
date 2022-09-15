import React from 'react';
import './main.css'

// import azure from '../../assets/images/Azure_Button.png';

const Loading = (e) => {
    e.preventDefault()
    var classe = e.currentTarget.classList
    classe.toggle('loading')
    var count = 0
    var ints = setInterval(() => {
        count += 1;
        if(count === 3){
            classe.toggle('loading')
            window.location.href = e.target.href
            clearInterval(ints);
        }
    }, 1000);
}

const Main = (props) => {
  return (
        <div className='intro'>
            <div className='contents'>
                <div className='container grid-lg'>
                    <div className='columns justify-content-center align-items-center'>
                        <div className='column col-lg-12 col-10 text-center panel'>
                            <div className='info'>
                                <h3>Active Time: <span>9am - 3pm</span></h3>
                                <h3>Status: <span className={props.status}>{props.status}</span></h3>
                            </div>
                            <div className='section-title'>
                                <h1 className='mb-1'>Horizon Classwize</h1>
                            </div>
                            <div className='desc'>
                                <p>Welcome to Classwize jump page. <span>Click the button below</span> to be taken to the login page for Classwize.</p>
                                {/* <img src={azure} alt={azure} className="mt-2 azure-button" /> */}
                                <p>Once on the login page, click the <span>Azure button</span> and login with your Horizon email account.</p>
                                
                            </div>
                            <div className='button-cont'>
                                <a href='https://classroom.au-1.familyzone.io/login/FQIhsyy3SK' className='btn btn-classwize px-3 py-2' onClick={Loading}>Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
  );
}

export default Main;