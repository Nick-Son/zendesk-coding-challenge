import React from 'react'

const ErrorMessage = (props) => (
  <p className="error">
    Oops, there was an error: 
    <span className="error__message"> {props.error.message}</span>
  </p>
)

export default ErrorMessage