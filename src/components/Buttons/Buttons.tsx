import React from 'react'
import './Buttons.css' /* import styling for button */

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]


// export const Button = ({
//     children,
//     type,
//     onClick,
//     buttonStyle,
//     buttonSize
// }) => {

//     /* set the button to the custom style given, else set the style to the default primary style */
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

//     /* set the button to the custom size given, else set the size to the default medium style */
//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

//     return (
//         <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
//             {children}
//         </button>
//     )
// }