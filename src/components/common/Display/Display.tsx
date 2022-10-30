import React, {ReactNode} from 'react';
import s from "./Diplay.module.css";
import {StyledBox} from "../StyledBox/StyledBox";

type CounterDisplayProps = {
    children?: ReactNode
    className?: string
}

export const Display: React.FC<CounterDisplayProps> = (props) => {
    const finalClassName = `${s.display} ${props.className ? props.className : ""}`

    return (
        <StyledBox className={finalClassName}>
                {props.children}
        </StyledBox>
    );
};