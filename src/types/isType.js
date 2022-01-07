import {isArray, isObject, isString} from '../utils'


const types = {
    bool: (val) => typeof val === 'boolean',
    number: (val) => !isNaN(val),
    string: (val) => isString(val),
    array: (val) => isArray(val),
    object: (val) => isObject(val),
}

export default (value, compare) => {
    if(value){
        if(!types.hasOwnProperty(compare)){
            message = `Invalide type given`
            console.error(message, `Available Types are ${Object.keys(types).join(', ')}`)
            return new Error(message)
        }
        
        if(!types[compare](value)){
            return new Error('$field must be $compare')
        } else {
            return true
        }
    }
}