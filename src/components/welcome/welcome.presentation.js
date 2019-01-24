import React from 'react';

export const CarouselView = () => (
    <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        </ul>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="/assets/imgs/help2.png" alt="AK_HELP" width="100%" height="700"/>
                <div className="carousel-caption">    
                </div>
            </div>
            <div className="carousel-item">
                <img src="assets/imgs/help1.jpeg" alt="AK_HELP" width="100%" height="700"/>
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
