import {isString} from '../utils'
var format = /^#(?:[0-9a-fA-F]{3}){1,2}$/

export default (value, compare, root) => {
    if(isString(value)){
        if(value.length){
            if (!format.test(value)) {
                if (root) {
                    return new Error('$field must be a hexadecimal characters')
                }
                return false
            } else {
                return true
            }
        }
    }
}