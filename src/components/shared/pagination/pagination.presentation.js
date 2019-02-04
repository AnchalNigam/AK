import React from 'react';
import './pagination.presentation.css';

export const PaginationView = ({getPrevPageView, getNextPageView, disablePrev, disableNext}) => (
    <div className="container-fluid top-adjust">
      <div className="row">
            <div className="col-2"></div>
            <div className="col-8 text-center">
                <button type="button" className="btn btn-info btn-style"  onClick={getPrevPageView} disabled={disablePrev}>Prev</button>
                <button type="button" className="btn btn-info btn-style" onClick={getNextPageView} disabled={disableNext}>Next</button>
            </div>
            <div className="col-2"></div>
      </div>
    </div>  
)

export default PaginationView;