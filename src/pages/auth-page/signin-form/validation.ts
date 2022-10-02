const REQUIRED_FIELD = 'Required to fill'
export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)) {
            return "Login cannot contain non-English letters"
        }
        return true
    }
}

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.length<6) {
            return "Password cannot contain less than 6 letters!"
        }
        return true
    }
}