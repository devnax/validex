export const isFunction = val => typeof val === 'function' ? true : false
export const isArray = val => typeof val === 'object' && Array.isArray(val) ? true : false
export const isObject = val => typeof val === 'object' && val !== null && !Array.isArray(val) ? true : false
export const isString = (val) => typeof val === 'string' ? true : false
export const isNumber = (val) => !isNaN(val) ? true : false
export const isInteger = (val) => typeof val === 'number' ? true : false
export const isBool = (val) => typeof val === 'boolean' ? true : false


export const isEmpty = (val) => {
    if(isString(val) || isArray(val)){
        return !val.length
    }else if(isObject(val)){
        return !Object.keys(val).length
    }else if(!val){
        return true
    }
}


export const parseType = (compare) => {

    let error       = null
    let compareVal  = compare

    if(isArray(compare) && compare.length === 2 && compare[1] instanceof Error){
        compareVal  = compare[0]
        error       = compare[1]
    }
    
    return {
        error,
        compareVal
    }
}
