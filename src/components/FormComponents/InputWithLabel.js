import React from "react";

import { FormControl, Input, InputLabel, styled } from "@mui/material";

const StyledFormControl = styled((props) => <FormControl {...props} />)(
    ({ theme }) => ({
        "& .MuiInputLabel-root": {
            fontSize: theme.typography.body2.fontSize,
            fontWeight: theme.typography.body2.fontWeight,
            paddingLeft: "20px",
            position: "relative",
            overflow: "visible",
        },
        "& .MuiInput-root": {
            marginTop: "0px",
            borderRadius: theme.shape.borderRadius,
            background: "#F2F2F2",
        },
        "& .MuiInput-input": {
            padding: "10px 20px",
            fontSize: theme.typography.subtitle1.fontSize,
            fontWeight: theme.typography.body2.fontWeight,
        },
    })
);

const InputWithLabel = ({
    name,
    label,
    value,
    onChange,
    helperText,
    inputProps,
}) => {
    const changeHandler = (event) => {
        onChange(name, event.target.value);
    };

    return (
        <StyledFormControl variant="standard">
            <InputLabel htmlFor={name} shrink>
                {label}
            </InputLabel>
            <Input
                value={value}
                id={name}
                onChange={changeHandler}
                disableUnderline
                placeholder={helperText}
                {...inputProps}
            />
        </StyledFormControl>
    );
};

export default InputWithLabel;
