import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({isQuery,onChangeText}) =>{
    return(
        <div>
            <input
                placeholder="Search Here"
                onChange={onChangeText}
                />
                {
                    !isQuery && <p>All Available Results</p>
                }
        </div>
    );

};

SearchBox.propTypes = {
    isQuery: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
};


export default SearchBox;