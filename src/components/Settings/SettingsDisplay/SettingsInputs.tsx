import React, {ChangeEvent} from 'react';
import {Display} from "../../common/Display/Display";
import s from "./SettingsInputs.module.css";

type SettingsDisplayProps = {
    minvalue: number
    maxvalue: number
    minInputError: boolean
    maxInputError: boolean
    minValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SettingsInputs: React.FC<SettingsDisplayProps> = (props) => {

    return (
        <Display>
            <label className={s.label}>
                <span>Max value:</span>
                <input type="number"
                       id={"max"}
                       className={props.maxInputError ? s.error : ""}
                       value={props.maxvalue}
                       onChange={props.maxValueHandler}
                />
            </label>
            <label className={s.label}>
                <span>Start value:</span>
                <input type="number"
                       id={"min"}
                       className={props.minInputError ? s.error : ""}
                       value={props.minvalue}
                       onChange={props.minValueHandler}
                />
            </label>
        </Display>
    );
};