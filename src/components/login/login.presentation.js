import React from 'react';
import './login.presentation.css';

const LoginView = ({name, onChange,onBlur, error, label}) => (
    <div className="inputGroup">
        <label>
           UserName
           <input type="text" name={name} placeholder={name}  
           onChange={onChange}
           onBlur={onBlur}
           />
       </label>
    </div>
)

export default LoginView;