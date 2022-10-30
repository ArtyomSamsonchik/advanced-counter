import React, {ChangeEvent} from 'react';
import {Display} from "../../common/Display/Display";
import {getInputsErrors} from "../../../helpers";
import {Input} from "../../common/Input/Input";

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
            <Input name="Max value:"
                   value={props.maxvalue}
                   inputError={maxValueError}
                   onChange={props.maxValueHandler}
            />
            <Input name="Min value:"
                   value={props.minvalue}
                   inputError={minValueError}
                   onChange={props.minValueHandler}
            />
        </Display>
    );
};