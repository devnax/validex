var format = /^([^a-zA-Z]*)$/
import {isString, isNumber} from '../utils'

export default (value) => {
    if(isString(value) || isNumber(value)){
        value = value.toString()
        if(value.length){
            if(!format.test(value)){
                return new Error('characters are not allowed in $field')
            }
        }
    }
}