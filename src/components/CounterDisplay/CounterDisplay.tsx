import React from 'react';
import {Display} from "../Display/Display";
import s from "./CounterDisplay.module.css";

type CounterDisplayProps = {
    count: number
    maxvalue: number
    error: boolean
    onTuning: boolean
}

export const CounterDisplay: React.FC<CounterDisplayProps> = (props) => {
    const countClassName =
        `${s.count} ${props.count === props.maxvalue || props.error ? s.error : ""}`;

    let displayMessage: string;

    if (props.error) {
        displayMessage = "Incorrect value!";
    } else if (props.onTuning){
        displayMessage  ="Enter values and press 'set'";
    } else {
        displayMessage = props.count.toString();
    }

    return (
        <Display>
            <div className={countClassName}>{displayMessage}</div>
        </Display>
    );
};