import React from 'react';

const Button = props => {
    const { btnStatus, onBtnClick, classes } = props;
    return (
        <button className={`btn btn-${btnStatus} ${classes || ''}`} onClick={onBtnClick}>{ props.children }</button>
    )
}

export default Button;