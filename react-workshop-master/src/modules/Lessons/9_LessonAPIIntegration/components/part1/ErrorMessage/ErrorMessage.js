import React from 'react';
//import PropType from 'prop-types'

const ErrorMessage = ({error})=>{

    return(
            <div>
                <h1>OOPS......</h1>
                <span className=" message">{error.toString()}</span>
            </div>
    );
};

export default ErrorMessage;