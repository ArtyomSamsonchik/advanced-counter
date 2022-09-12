import React from 'react';
import s from "./Button.module.css";

type ButtonProps = {
    name: string
    disabled: boolean
    callback: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
    const onClickHandler = () => {
        props.callback();
    };

    return (
        <button className={s.button}
                disabled={props.disabled}
                onClick={onClickHandler}>{props.name}
        </button>
    );
};