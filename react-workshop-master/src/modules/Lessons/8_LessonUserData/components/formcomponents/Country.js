import React from 'react';

const Country = (props) => (
    <div>
        <select
            name={props.name}
            value={props.selectedOption}
            onChange={props.controlFunc}
            >
            <option key={-1} value="">{props.placeholder}</option>
            {props.options.map((opt, index) => {
                return (
                    <option key={index} value={opt['label']}>{opt['label']}</option>
                );
            })}
        </select>
    </div>
);


export default Country;