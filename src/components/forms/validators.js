export const required = value => {
    if ( value ) 
        return undefined;
    return "Поле обязательное!"
}

export const radio_required = value => {
    if ( value ) 
        return undefined;
    return "*Сделайте выбор"
}

export const checkbox_required = value => {
    if ( value ) 
        return undefined
    else {
        return "*Необходимо подтверждение"
    }
}

export const file_required = value => {
    if(value)
        return undefined
    else return "*Добавьте фотографию"
}