import React from 'react';
import './login.presentation.css';

export const CarouselView=()=>(
    <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        </ul>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="/assets/imgs/help2.png" alt="AK_HELP" width="100%" height="500"/>
                <div className="carousel-caption">    
                </div>
            </div>
            <div className="carousel-item">
                <img src="assets/imgs/help1.jpeg" alt="AK_HELP" width="100%" height="500"/>
                <div className="carousel-caption">    
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
        </a>
    </div>
)
export const LogoView=()=>(
    <div className="col-12 text-center">
    <img src='https://s3.amazonaws.com/admitkard-frontend-resources/img/img-2/logo.png' 
    className="img-responsive d-block mx-auto" alt="ak_logo"/>
    <h2 className="ak_color set_font">Help<span className="ak_color_blue"> Management</span> Portal</h2>
    </div>
  
)

export const ButtonView=({click})=>(
    <div className="col-12 text-center mt-5">
       <button className="btn btn-info btn-lg" onClick={click}>Let's Go</button>
    </div>
  
)

const LoginView = ({name, onChange, error, label,type}) => (
    <div className="col-12 mt-5 text-center">
        <label>
           <h5 className="ak_color_blue">{label}:</h5>
           <input type={type} name={name} placeholder={name} className="inputGroup"
           onChange={onChange}
           />
       </label>
    </div>
)

export default LoginView;
