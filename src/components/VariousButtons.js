//다양한 버튼 만들기
import React from 'react';
import './VariousButtons.scss';
import classNames from 'classname';

const VariousButtons = ({children, size, color, outline, fullWidth}) => {
    return (
        <button className={classNames('button',size, color, { outline,fullWidth })}>{children}</button>
    );
};

export default VariousButtons;