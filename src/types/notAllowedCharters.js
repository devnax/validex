var format = /^([^a-zA-Z]*)$/
import {isString, isNumber} from '../utils'

export default (value) => {
    if(isString(value) || isNumber(value)){
        value = value.toString()
        if(value.length){
            return format.test(value)
        }
    }
    
}