import React from 'react'
import styled from '@emotion/styled';
import { color_border_grey, color_error, color_grey, color_white } from '../colors';

const ErrorMessage = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    bottom: -2.2em;
    z-index: 2;

    color: ${color_error};
    font-size: .7em;

    &>span{
        background: ${color_white};
        border: medium dashed ${color_error};
        padding: .5em;
        border-radius: 5px;
        box-shadow: 5px 7px 8px 0px rgba(0, 0, 0, 0.2);
    }
`

const InputStyle = styled.input`
    
    position: relative;

    &::placeholder{
        color: ${color_grey};
    }
    border: 3px solid ${color_border_grey};
    ${(props)=>props.iserror && `
        border-color: ${color_error} !important;
        background: ${color_white} !important;
        &::placeholder{
            color: ${color_error} !important;;
        }
    `}

`

export const file_upload = ( {
    input,
    type,
    meta: {
        touched,
        error,
        active,
        warning
    },
    id,
    props
} ) => {
    delete input.value
    const iserror = touched && error && !active

    return (
        <>
            {iserror && <ErrorMessage><span>{error}</span></ErrorMessage>}
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

    const iserror = touched && error && !active

    return(
            <InputStyle id={id} type={type} iserror={iserror} placeholder={iserror? error: placeholder}  {...props} {...input} />
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
    const iserror = touched && error && !active
    
    return(
        <>
            {iserror && <ErrorMessage><span>{error}</span></ErrorMessage>}
            <input id={id} type={type} {...props} {...input} />
        </>
    )
}