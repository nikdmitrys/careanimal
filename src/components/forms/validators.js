export const required = value => {
    if ( value ) 
        return undefined;
    return "Поле является обязательным!"
}

export const checkbox_required = value => {
    if ( value ) 
        return undefined
    else {
        return "*Необходимо подтверждение"
    }
}
