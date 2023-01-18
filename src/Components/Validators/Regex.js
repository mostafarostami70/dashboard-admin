const testEmail = (value) => {
    const patternEmail = /^[a-z 0-9 A-z]+@[a-z 0-9 A-z]+\.[a-z 0-9 A-z]{2,6}$/g
    return patternEmail.test(value)
}

const testCodeMelli = (value) => {
    //code
}
const testPhoneNumber = (value) => {
    //code
}

export default {
    testEmail , 
    testCodeMelli , 
    testPhoneNumber
}