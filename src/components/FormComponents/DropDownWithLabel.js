import React from "react";

import { styled } from "@mui/material/styles";
import { Autocomplete, TextField } from "@mui/material";

const StyledTextField = styled((props) => (
    <TextField variant="standard" {...props} />
))(({ theme }) => ({
    "& .MuiInputLabel-root": {
        fontSize: theme.typography.body2.fontSize,
        fontWeight: theme.typography.body2.fontWeight,
        paddingLeft: "20px",
        position: "relative",
    },
    "& .MuiInput-root": {
        marginTop: "0px",
        background: "#F2F2F2",
        borderRadius: theme.shape.borderRadius,
    },
    "& .MuiInput-input": {
        padding: "10px 0px 10px 20px !important",
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: theme.typography.body2.fontWeight,
    },
}));

const DropDownWithLabel = ({
    label,
    name,
    value,
    onChange,
    helperText,
    options,
}) => {
    const changeHandler = (event, value) => {
        onChange(name, value);
    };

    return (
        <Autocomplete
            openOnFocus
            selectOnFocus
            options={[...options, ""]}
            id={name}
            value={value}
            onChange={changeHandler}
            renderInput={(params) => {
                params = {
                    ...params,
                    label: label,
                    InputLabelProps: {
                        ...params.InputLabelProps,
                        shrink: true,
                    },
                    InputProps: {
                        ...params.InputProps,
                        placeholder: helperText,
                        disableUnderline: true,
                    },
                };

                return <StyledTextField variant="standard" {...params} />;
            }}
        />
    );
};

export default DropDownWithLabel;
