//rsc
import React from 'react';
import classNames from 'classname';
import './Button.scss';
//따로 css로 Watch Sass해줄 필요 없이 그냥 바로 연결해주면됨!

const Buttons = ({children, size}) => {
    return (
        <div>
            {/* 부모요소의 props로 전달받아서 줄거임 / classNames에서 <button className='button large'>{children}</button>이렇게 주지않고!(6.23-react style참고) */}
            {/* <button className={`button ${size}`}>{children}</button> */}
            <button className={classNames('button',size)}>{children}</button>
        </div>
    );
};

export default Buttons;