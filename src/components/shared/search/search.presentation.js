import React from 'react';
import './search.presentation.css'

export const SearchBox = () => (
    <div className="chat-adjust">
        <form className="form-inline" >
            <input className="w-75 form-control" placeholder="Search a chat..."/>
            <div className="btn-group">
                <button className="btn btn-light" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                <div className="btn-group">
                    <button type="button" data-toggle="dropdown" className="btn btn-light dropdown-toggle"><i className="fa fa-bars"></i></button>
                        <div className="dropdown-menu">
                            <div className="dropdown-header">Show only</div>
                            <div className="dropdown-item-text">
                                <small><input type="radio" name="usertype" value="students"/> Students<br/></small>
                                <small><input type="radio" name="usertype" value="mentors"/> Mentors<br/></small>
                            </div>
                            <div className="col-12 dropdown-divider"></div>
                            <div className="dropdown-header margin-0">Order by date</div>
                            <span className="dropdown-item-text">
                                <small><input type="radio" name="name-order" value="desc"/> Recent first<br/></small>
                                <small><input type="radio" name="name-order" value="asc"/> From start of time<br/></small>
                            </span>
                        </div>
                </div>
            </div>
        </form>
    </div>
)