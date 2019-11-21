import React, { useState, useEffect } from 'react';
import {object} from "prop-types";

function useFormValidation(initialState, validate){
    const [values, setValues] = useState(initialState);
    const [isSubmitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});


    useEffect(() => {
        if (isSubmitting){
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors){
                console.log("authenticated!", values.email, values.password);
                setSubmitting (false)
            } else {
                setSubmitting(false)
            }
        }
    },[errors]);

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    function handleBlur() {
        const validationErrors = validate(values);
        setErrors(validationErrors)
    }

    function handleSubmit(e){
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
    }

    return {handleSubmit, handleChange, handleBlur, values, errors, isSubmitting}
}

export default useFormValidation;