import React, { useState } from 'react'
import styled from '@emotion/styled';

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

const InputContainer = styled.div`
    position: relative;
`

const ErrorMessage = styled.div`
    position: absolute;
`

export const Input = ( {
    input,
    placeholder,
    meta: {
        touched,
        error,
        warning
    },
    id,
    props
} ) =>{
    return(
        <InputContainer>
            <input id={id} placeholder={placeholder}  {...props} {...input} />
            <ErrorMessage>{error}</ErrorMessage>
        </InputContainer>
    )
}