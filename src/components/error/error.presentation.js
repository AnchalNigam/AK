import React from 'react';
import './error.presentation.css';

export const Error404 = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8 text-center error-template">
                <h1 className="heading-style">
                    <span className="grey-text">4</span>
                    <span className="ak_color_blue">0</span>
                    <span className="grey-text">4</span>
                </h1>
                <h2 className="grey-text">
                THE PAGE YOU REQUESTED CANNOT BE FOUND!!
                </h2>
            </div>
            <div className="col-2"></div>
        </div>  
        <div className="row">
        </div>
    </div>
)

export default Error404;