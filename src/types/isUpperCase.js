import {isString} from '../utils'
export default (value, compare, root) => {
    if(compare===true && isString(value)){
        if(value.length){
            if (value !== value.toUpperCase()) {
                if (root) {
                    return new Error('$field must be uppercase!')
                }
                return false
            } else {
                return true
            }
        }
    }
}