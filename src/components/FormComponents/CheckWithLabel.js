import React from "react";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    Typography,
} from "@mui/material";

const CheckWithLabel = ({ value, label, checked, onChange }) => {
    const changeHandler = (event) => {
        onChange(value, event.target.checked);
    };

    return (
        <FormControl>
            <FormControlLabel
                control={
                    <Checkbox checked={checked} onChange={changeHandler} />
                }
                labelPlacement="end"
                label={label}
                value={value}
            />
        </FormControl>
    );
};

export default CheckWithLabel;
