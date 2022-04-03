import React from 'react';
import {SpinnerCircular} from 'spinners-react'
import './loading.scss'

const Loader = ({ isLoading }) => {
    return (
        <div id="loader" className="Loader flex items-center justify-center align-self-center min-h-screen">
            <SpinnerCircular size={68} thickness={116} speed={163} color="rgba(121, 217, 255, 1)" secondaryColor="rgba(121, 217, 255, 0.31)" />
        </div>
    )
}

export default Loader

