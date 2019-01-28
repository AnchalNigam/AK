import React from 'react';
import './../chatlist/chatlist.presentation.css';

export const getFirtCharAsImage = (name) => (
    <div className="img-adjust rounded-circle color-class">
            <div className="center">
            {name.charAt(0)}
            </div>
    </div>
)

export default getFirtCharAsImage;