import {isString} from '../utils'
export default (value, compare, root) => {
    if(compare===true && isString(value)){
        if(value.length){
            if (value !== value.toLowerCase()) {
                if (root) {
                    return new Error('$field must be lowercase!')
                }
                return false
            } else {
                return true
            }
        }
    }
}