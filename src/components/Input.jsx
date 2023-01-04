import React, { Component } from 'react';

const Input = ({pass, setPass, email, setEmail}) => {
        return (
            <>
                <div className="mb-3">
                    <input onChange={(e) => setEmail(e.target.value)} className='form-control' type="email" placeholder='Ingresa tu email'/>
                </div>
                <div className="mb-3">
                    <input onChange={(e) => setPass(e.target.value)} className='form-control' type="password" placeholder='Ingresa tu contraseña' />
                </div>
            </>
            
        );
}
    
export default Input;