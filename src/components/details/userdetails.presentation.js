import React from 'react';
import './userdetails.presentation.css';

export const UserDetailsView = () => (
    <div className="container-fluid">
        
        <div className="row">
            <div className="card card-piece">
                <div className="text-center">
                    <div className="card-body">
                    <img src="assets/imgs/user1.jpg" alt="profile-pic" className="pic-adjust rounded-circle"/>
                        <h4 className="card-title">Tarandeep Singh</h4>
                        <p className="card-text para">Master of Accounting and Law(2018)</p>
                        <p className="card-text para">Deakin University</p>
                        <p className="card-text para">Melbourne-Burwood, Australia</p>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="row">
            <div className="card card-piece">
                <div className="card-body text-center">
                    <div className="row">
                        <h5 className="card-title col-6 text-left">Applied To</h5>
                        <h5 className="card-title col-6 text-right">Status</h5>    
                    </div>
                    <hr className="horizontal-line-style" />
                    <p className="card-text para float-left">University of Dublin, Ireland</p>
                    <p className="card-text para float-right">Accepted</p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="card card-piece">
                <div className="card-body text-left">
                    <h5 className="card-title">Education</h5>
                    <hr className="horizontal-line-style"/>
                    <div>
                        <h6 className="card-substitle">12th</h6>
                        <p className="card-text">ICSE - Science (2010)</p>
                        <hr/>
                    </div>
                    <div>
                        <h6 className="card-substitle">Graduation</h6>
                        <p className="card-text para">Electronics &amp; Communication</p>
                        <p className="card-text para">BIT Mesra, Ranchi (2014)</p>
                        <hr/>
                    </div>
                    <div>
                        <h6 className="card-substitle">Post Graduation</h6>
                        <p className="card-text para">Masters in Computer Science</p>
                        <p className="card-text para">Trinity College Dublin, Ireland(2019)</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="card card-piece">
                <div className="card-body"> 
                    <h5 className="card-title">Tests Given</h5>
                    <hr className="horizontal-line-style"/>
                    <div className="row">
                        <p className="card-text col-6 text-left">IELTS</p>
                        <p className="card-text col-6 text-right">Yes</p>   
                    </div> 
                    <div className="row">
                        <p className="card-text col-6 text-left">TOEFL</p>
                        <p className="card-text col-6 text-right">Yes</p> 
                    </div>
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="card card-piece">
                <div className="card-body text-left">
                    <h5 className="card-title">Work Experience</h5>
                    <hr className="horizontal-line-style"/>
                    <div>
                        <h6 className="card-substitle">Company 1</h6>
                        <p className="card-text">Position 1</p>
                        <hr/>
                    </div>
                    <div>
                        <h6 className="card-substitle">Company 2</h6>
                        <p className="card-text para">Position 2</p>
                        <p className="card-text para">Work duration</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
)
