var format = /^([^0-9]*)$/
import {isString, isNumber} from '../utils'

export default (value) => {
    if(isString(value) || isNumber(value)){
        value = value.toString()
        if(value.length){
            if(!format.test(value)){
                return new Error('number are not allowed in $field')
            }
        }
    }
    
}