import React, {ReactNode} from 'react';
import {StyledBox} from "../StyledBox/StyledBox";
import s from "./ControlButtons.module.css";

type ButtonsContainerProps = {
    children?: ReactNode
}

export const ControlButtons: React.FC<ButtonsContainerProps> = (props) => {
    return (
        <StyledBox className={s.buttons}>
            {props.children}
        </StyledBox>
    );
};