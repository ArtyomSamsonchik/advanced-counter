import React from 'react';
import s from "./Button.module.css";

type ButtonProps = {
    name: string
    disabled: boolean
    callback: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className={s.button}
                disabled={props.disabled}
                onClick={props.callback}
        >
            {props.name}
        </button>
    );
}