import React from 'react';
import s from "./Diplay.module.css";
import {StyledBox} from "../StyledBox/StyledBox";

type CounterDisplayProps = {
    children: JSX.Element | JSX.Element[]
}

export const Display: React.FC<CounterDisplayProps> = (props) => {
    return (
        <StyledBox className={s.display}>
                {props.children}
        </StyledBox>
    );
};