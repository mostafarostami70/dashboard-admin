const requiredValue = "REQUIRED_VALUE"
const minValue = "MIN_VALUE"
const maxValue = "MAX_VALUE"
const emailValue = "EMAIL_VALUE"

export const requiredValidator = () => ({
    value: requiredValue
})
export const minValidator = (min) => ({
    value: minValue,
    min
})
export const maxValidator = (max) => ({
    value: maxValue,
    // max: max
    // چون مقدار ورودی و متغیر یکیه مثل خط پایین مینویسیم
    max
})
export const emailValidator = () => ({
    value: emailValue
})

export default {requiredValue , minValue , maxValue , emailValue}
