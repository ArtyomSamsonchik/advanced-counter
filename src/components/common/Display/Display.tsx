import React, {ReactNode} from 'react';
import s from "./Diplay.module.css";
import {StyledBox} from "../StyledBox/StyledBox";

type CounterDisplayProps = {
    children?: ReactNode
}

export const Display: React.FC<CounterDisplayProps> = (props) => {
    return (
        <StyledBox className={s.display}>
                {props.children}
        </StyledBox>
    );
};