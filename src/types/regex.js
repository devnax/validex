import {isString, isNumber} from '../utils'

export default (value, compare) => {
    if(isString(value) || isNumber(value)){
        value = value.toString()
        if(value.length){
            if(!compare.test(value)){
                return new Error("Invalid value")
            }
        }
    }
    
}
