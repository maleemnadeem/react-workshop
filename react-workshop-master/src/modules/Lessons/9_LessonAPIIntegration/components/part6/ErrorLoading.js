import React from 'react';
import PropTypes from 'prop-types';

const ErrorLoading = ({error}) => {
    return (
        <div >
            <h6>Error loading Data...</h6>
            <span>{error.toString()}</span>
        </div>
    );
};
ErrorLoading.propTypes = {
    error: PropTypes.object.isRequired,
};

export default ErrorLoading;