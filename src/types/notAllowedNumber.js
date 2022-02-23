var format = /^([^0-9]*)$/
import {isString, isNumber} from '../utils'

export default (value, compare, root) => {
    if(compare === true && (isString(value) || isNumber(value))){
        value = value.toString()
        if(value.length){
            if (!format.test(value)) {
                if (root) {
                    return new Error('number are not allowed in $field')
                }
                return false
            } else {
                return true
            }
        }
    }
    
}