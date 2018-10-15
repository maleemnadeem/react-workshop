import React from 'react';

const Gender = (props) => (
    <div>
        <label>{props.title}</label>
        <div  id={props.setName}>
            {props.options.map(opt => {
                return (
                    <label key={opt}>
                        <input
                            className="form-checkbox"
                            name={props.setName}
                            onChange={props.controlFunc}
                            value={opt}
                            checked={ props.selectedOptions.indexOf(opt) > -1 }
                            type={props.type} /> {opt}
                    </label>
                );
            })}
        </div>
    </div>
);

export default Gender;