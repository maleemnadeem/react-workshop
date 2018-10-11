import React from 'react';
import PropTypes from 'prop-types';

const BoilingNotice = ({temperature}) => {
    return temperature ? (
        <span className="boiling-notice">
        {
           !isNaN(temperature) ? ( temperature > 100 ? <strong>Water has Boiled!</strong> : 'Water is not hot enough..') : <strong>Value is Invalid</strong>
        }
      </span>
    ) : null;
};

BoilingNotice.propTypes = {
    temperature: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BoilingNotice;
