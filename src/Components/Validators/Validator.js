import Rules from "./Rules"

const validator = (value, validations) => {
    let validatorResult = []
    for (const validator of validations) {
        if (validator.value === Rules.requiredValue) {
            value.trim().length === 0 && validatorResult.push(false)
        }
        if (validator.value === Rules.minValue) {
            value.trim().length < validator.min && validatorResult.push(false)
        }
        if (validator.value === Rules.maxValue) {
            value.trim().length > validator.max && validatorResult.push(false)
        }
        if (validator.value === Rules.emailValue) {
            !value.trim().includes("@") && validatorResult.push(false)
        }
    }

    if (validatorResult.length)
        return false;
    else
        return true;
}

export default validator