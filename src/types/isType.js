import {isArray, isObject, isString} from '../utils'


const types = {
    bool: (val) => typeof val === 'boolean',
    number: (val) => !isNaN(val),
    string: (val) => isString(val),
    array: (val) => isArray(val),
    object: (val) => isObject(val),
}

export default (value, compare, root) => {
    if(value){
        if(!types.hasOwnProperty(compare)){
            message = `Invalide type given`
            console.error(message, `Available Types are ${Object.keys(types).join(', ')}`)
            return new Error(message)
        }
        
        if (!types[compare](value)) {
            if (root) {
                return new Error('$field must be $compare')
            }
            return false
        } else {
            return true
        }
    }
}