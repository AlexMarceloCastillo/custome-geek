import React from 'react';

const ConfirmComponent = ({message, callbackFunction}) => {
    return (
        <div>
            <p>{message}</p>
            <button className="btn btn-outline-primary btn-sm me-2" onClick={()=>{callbackFunction()}}>Confirmar</button>
            <button className="btn btn-outline-danger btn-sm">Cancelar</button>
        </div>
    );
}

export default ConfirmComponent;
