import React from 'react';

//icons
import { GiSpiderMask } from 'react-icons/gi';

//css
import "./Loader.component.css"; 


const LoaderComponent = ({isLoading}) => {

    const loadingData = () => {
        if (isLoading) {
          return <GiSpiderMask className="icon-loading" />
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
