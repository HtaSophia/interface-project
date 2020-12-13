import { grayColor, defaultFont } from "assets/jss/material-dashboard-react.js";

const customSelectStyle = {
    labelRoot: {
        ...defaultFont,
        color: grayColor[3] + " !important",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "1.42857",
        letterSpacing: "unset",
    },
    formControl: {
        paddingBottom: "10px",
        margin: "18px 0 0 0",
        position: "relative",
        verticalAlign: "unset",
    },
    marginTop: {
        marginTop: "16px",
    },
};

export default customSelectStyle;
