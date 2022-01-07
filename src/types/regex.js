import {isString, isNumber} from '../utils'

export default (value, compare, root) => {
    if(isString(value) || isNumber(value)){
        value = value.toString()
        if(value.length){
            if (!compare.test(value)) {
                if (root) {
                    return new Error("Invalid value")
                }
                return false
            } else {
                return true
            }
        }
    }
    
}
