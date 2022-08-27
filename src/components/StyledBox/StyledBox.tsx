import React, {ReactNode} from 'react';
import s from "./StyledBox.module.css";

type StyledBoxProps = {
    className?: string
    children: ReactNode | ReactNode[]
}

export const StyledBox: React.FC<StyledBoxProps> = ({children, className}) => {
    return (
        <div className={`${s.box} ${className ? className : ""}`}>
            {children}
        </div>
    );
};