import React from 'react';
import './Preloader.css';

const Preloader = ({isShowPreloader}) => {
    return (
        <div className={`preloader ${isShowPreloader ? '' : 'preloader_hide'}`}>
            <div className='preloader__container'>
                <span className='preloader__round'></span>
            </div>
        </div>
    )
};

export default Preloader;