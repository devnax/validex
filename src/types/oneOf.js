import {isString, isArray} from '../utils'

export default (value, compare, root) => {
    
    if(!isArray(compare)){
        const message = "property must be an array"
        console.error(message)
        return new Error(message)
    }

    if(isString(value)){
        if(value.length){
            if (!compare.includes(value)) {
                if (root) {
                    return new Error("$field must be one of "+compare.join('|'))
                }
                return false
            } else {
                return true
            }
        }
    }
}