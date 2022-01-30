import React from 'react';

//Icons
import {ImSpinner8} from 'react-icons/im';

//Css

import "./Loader.component.css"; 


const LoaderComponent = ({isLoading}) => {

    const loadingData = () => {
        if (isLoading) {
          return <ImSpinner8 className="icon-loading" />
        } else {
          return 
        }
      }
    return (
        <div className={`loading h-100 d-flex justify-content-center align-items-center ${isLoading ? 'on' : 'off'}`}>
            {loadingData()}
        </div>
    );
}

export default LoaderComponent;
