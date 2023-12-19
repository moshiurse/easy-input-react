import {forwardRef} from 'react';
import PropTypes from "prop-types";
import style from "./Button.module.css";

function Button(props) {

    const {
        title = 'Easy Button',
        height = '60px',
        fullWidth = false,
        children
    } = props;
    console.log(props);

    return (
        <button className={style['ei-btn']}>{children ? children : title}</button>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    height: PropTypes.string,
    fullWidth: PropTypes.bool,
    type: PropTypes.oneOf(['primary', 'danger', 'success', 'warning']),
    children: PropTypes.node
}

export default Button;
