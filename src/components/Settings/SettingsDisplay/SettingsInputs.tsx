import React, {ChangeEvent} from 'react';
import {Display} from "../../common/Display/Display";
import s from "./SettingsInputs.module.css";
import {getInputsErrors} from "../../../helpers";

type SettingsDisplayProps = {
    minvalue: number
    maxvalue: number
    minValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SettingsInputs: React.FC<SettingsDisplayProps> = (props) => {
    const {maxValueError, minValueError} = getInputsErrors(props.minvalue, props.maxvalue);

    return (
        <Display>
            <label className={s.label}>
                <span>Max value:</span>
                <input type="number"
                       id={"max"}
                       className={maxValueError ? s.error : ""}
                       value={props.maxvalue}
                       onChange={props.maxValueHandler}
                />
            </label>
            <label className={s.label}>
                <span>Start value:</span>
                <input type="number"
                       id={"min"}
                       className={minValueError ? s.error : ""}
                       value={props.minvalue}
                       onChange={props.minValueHandler}
                />
            </label>
        </Display>
    );
};