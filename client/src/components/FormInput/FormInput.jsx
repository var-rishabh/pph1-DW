import React from 'react'
import "./FormInput.css";
const FormInput = ({ setInputValue, label, type, value, id, isDisabled=false}) => {
    return (
        <div>
            <div className="form-input">
                <input type={type} placeholder={label} id={id} onChange={(e) => setInputValue(e.target.value)} value={value} disabled={isDisabled}/>
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    )
}

export default FormInput
