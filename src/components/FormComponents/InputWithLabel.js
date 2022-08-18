import React from "react";

import { FormControl, Input, InputLabel, styled } from "@mui/material";

const StyledFormControl = styled((props) => <FormControl {...props} />)(
    ({ theme }) => ({
        "& .MuiInputLabel-root": {
            fontSize: theme.typography.h2.fontSize,
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
            fontSize: theme.typography.subtitle2.fontSize,
            fontWeight: theme.typography.body2.fontWeight,
        },
        "& .MuiInput-root.Mui-error": {
            border: `2px solid ${theme.palette.error.main}`,
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
    labelProps,
    formControlProps,
}) => {
    const changeHandler = (event) => {
        onChange(name, event.target.value);
    };

    return (
        <StyledFormControl variant="standard" {...formControlProps}>
            <InputLabel htmlFor={name} shrink {...labelProps}>
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
