import React from 'react';
import {StyledBox} from "../StyledBox/StyledBox";
import s from "./ControlButtons.module.css";

type ButtonsContainerProps = {
    children: JSX.Element | JSX.Element[]
}

export const ControlButtons: React.FC<ButtonsContainerProps> = (props) => {
    return (
        <StyledBox className={s.buttons}>
            {props.children}
        </StyledBox>
    );
};