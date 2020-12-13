import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";

import styles from "assets/jss/material-dashboard-react/components/customSelectStyle.js";
import { dangerColor, grayColor } from "assets/jss/material-dashboard-react.js";

const SelectInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderColor: grayColor[4] + " !important",
        borderWidth: "1px !important",
        borderBottom: "solid",
        "&:focus": {
            borderColor: dangerColor[0] + " !important",
            backgroundColor: "transparent",
        },
    },
}))(InputBase);

const useStyles = makeStyles(styles);

export default function CustomSelect(props) {
    const classes = useStyles();

    const { formControlProps, id, label, options, value, handleChange } = props;

    const marginTop = classNames({
        [classes.marginTop]: label === undefined,
    });

    return (
        <FormControl
            {...formControlProps}
            className={formControlProps.className + " " + classes.formControl}
        >
            {label !== undefined ? (
                <InputLabel
                    className={classes.labelRoot}
                    htmlFor={id + "-label"}
                >
                    {label}
                </InputLabel>
            ) : null}
            {options && (
                <Select
                    labelId={id + "-label"}
                    id={id}
                    value={value}
                    onChange={handleChange}
                    classes={{
                        root: marginTop,
                        disabled: classes.disabled,
                    }}
                    input={<SelectInput />}
                >
                    {options.map((opt) => (
                        <MenuItem value={opt.value} key={opt.id}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
            )}
        </FormControl>
    );
}

CustomSelect.propTypes = {
    formControlProps: PropTypes.object,
    id: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.string,
    handleChange: PropTypes.func,
};
