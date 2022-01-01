export const isFunction = val => typeof val === 'function' ? true : false
export const isArray = val => typeof val === 'object' && Array.isArray(val) ? true : false
export const isObject = val => typeof val === 'object' && val !== null && !Array.isArray(val) ? true : false
export const isString = (val) => typeof val === 'string' ? true : false
export const isNumber = (val) => !isNaN(val) ? true : false
export const isInteger = (val) => typeof val === 'number' ? true : false

export const parseType = (compare) => {

    let message     = null
    let compareVal  = compare

    if(isArray(compare)){
        compareVal = compare[0]
        message = compare[1]
    }
    
    return {
        message,
        compareVal
    }
}