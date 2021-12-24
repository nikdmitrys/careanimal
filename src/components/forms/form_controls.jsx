import React from 'react'
import styled from '@emotion/styled';
import { color_border_grey, color_grey } from '../colors';

const InputContainer = styled.div`
    position: relative;
`

const ErrorMessage = styled.div`
    position: absolute;
    z-index: 2;
`

const InputStyle = styled.input`
    
    position: relative;

    &::placeholder{
        color: ${color_grey};
    }
    border: 3px solid ${color_border_grey};
    ${(props)=>props.isError && `
        border-color: rgb(204, 88, 88) !important;

        &::placeholder{
            color: rgb(204, 88, 88) !important;
        }
    `}

`

export const file_upload = ( {
    input,
    type,
    meta: {
        touched,
        error,
        warning
    },
    id,
    props
} ) => {
    delete input.value

    return (
        <>
            <input id={id} {...props} {...input} type={type}/>
        </>
    )
}

export const Input = ( {
    input,
    placeholder,
    meta: {
        touched,
        error,
        active,
        warning
    },
    id,
    type,
    props
} ) =>{

    const isError = touched && error && !active

    return(
            <InputStyle id={id} type={type} isError={isError} placeholder={isError? error: placeholder}  {...props} {...input} />
    )
}

export const RadioInput = ({
    input,
    placeholder,
    meta: {
        touched,
        error,
        active,
        warning
    },
    id,
    type,
    checked,
    props
}) =>{
    const isError = touched && error && !active
    
    return(
        <>
            <input id={id} type={type} checked={checked} isError={isError} {...props} {...input} />
        </>
    )
}