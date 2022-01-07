import {isString} from '../utils'

export default (value, compare, root) => {
    if(isString(value)){
        if(value.length){
            if (!(value.length >= compare)) {
                if (root) {
                    return new Error('$field minimum length of $compare')
                }
                return false
            } else {
                return true
            }
        }
    }
    
}