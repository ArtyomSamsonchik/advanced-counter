import React from 'react';
import s from "./StyledBox.module.css";

type StyledBoxProps = {
    className?: string
    children: JSX.Element | JSX.Element[]
}

export const StyledBox: React.FC<StyledBoxProps> = (props) => {
    return (
        <div className={`${s.box} ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    );
};