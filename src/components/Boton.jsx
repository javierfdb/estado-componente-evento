import React, { Component } from 'react'

const Boton = ({texto}) => {
    return (
        <div className='d-flex justify-content-center'>
            <button type='submit' className="btn btn-lg btn-primary">{texto}</button>
        </div>
    )
}

export default Boton;
