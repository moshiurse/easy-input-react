import {forwardRef} from 'react';
import PropTypes from "prop-types";
import style from "./Button.module.css";



/**
 * @typedef {object} ButtonProps
 * @property {string} [title='Easy Button']
 * @property {string} [height='60px']
 * @property {boolean} [fullWidth=false]
 * @property {boolean} [disabled=false]
 * @property {boolean} [rounded=false]
 * @property {string} color
 * @property {React.ReactNode} prefixIcon
 * @property {React.ReactNode} suffixIcon
 * @property {'primary' | 'danger' | 'success' | 'warning'} type - One of ['primary', 'danger', 'success', 'warning']
 * @property {string} [effect='ripple']
 * @property {() => void} onClick - Click event handler
 * @property {() => void} onMouseEnter - Mouse enter event handler
 * @property {() => void} onMouseLeave - Mouse leave event handler
 * @property {() => void} onFocus - Focus event handler
 * @property {() => void} onBlur - Blur event handler
 */

/**
 * @param {ButtonProps} props
 */
function Button(props) {

    const {
        title = 'Easy Button',
        width,
        height = '60px',
        fullWidth = false,
        children,
        disabled = false,
        rounded = false,
        color,
        prefixIcon,
        suffixIcon,
        type,
        effect = 'ripple',
        loading = false,
        className = '',
        onClick,
        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur,
        onDoubleClick
    } = props;
    console.log(props, children);

    return (
        <button className={`${style['ei-btn']} ${style[type]} ${rounded ? style.rounded : ''} ${className}`} 
            disabled={disabled}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            onDoubleClick={onDoubleClick}
            >{children ? children : title}</button>
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
