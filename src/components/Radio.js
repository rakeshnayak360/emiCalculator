import React from 'react';
import PropTypes from 'prop-types';


const Radio = props => {
    const { name, value, checked, onChange } = props;
    return (
        <label>
            <input type="radio" name={name} value={value} checked={checked} onChange={(e) => onChange(e.target.value)} />
            {value}
        </label>
    );
};


Radio.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};


export default Radio;
