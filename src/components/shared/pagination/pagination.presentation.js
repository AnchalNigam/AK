import React from 'react';
import './pagination.presentation.css';

export const PaginationView = ({getPrevPageView,getNextPageView}) => (
    <div className="container-fluid top-adjust">
      <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <button type="button" className="btn btn-sm btn-info btn-style"  onClick={getPrevPageView}>Prev</button>
                <button type="button" className="btn btn-sm btn-info btn-style" onClick={getNextPageView}>Next</button>
            </div>
            <div className="col-4"></div>
      </div>
    </div>  
)

export default PaginationView;