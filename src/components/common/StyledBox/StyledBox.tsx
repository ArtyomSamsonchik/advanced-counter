import React, {ReactNode} from 'react';
import s from "./StyledBox.module.css";

type StyledBoxProps = {
    className?: string
    children?: ReactNode
}

export const StyledBox: React.FC<StyledBoxProps> = (props) => {
    return (
        <div className={`${s.box} ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    );
};