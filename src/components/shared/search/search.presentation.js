import React from 'react';
import './search.presentation.css'

export const SearchBox = () => (
    <div className="chat-adjust">
        <form className="form-inline" >
            <input className="w-75 form-control" placeholder="Search a chat..."/>
            <button className="btn btn-light" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
    </div>
)