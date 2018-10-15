import React from 'react';

const Name = (props) => (
    <div>
        <label>{props.title}</label>
        <input
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder} />
    </div>
);

export default Name;