import {isString} from '../utils'
export default (value, compare, root) => {
    if(isString(value)){
        if(value.length){
            if (!(value.length <= compare)) {
                if (root) {
                    return new Error('$field maximum length of $compare')
                }
                return false
            } else {
                return true
            }
        }
    }
}