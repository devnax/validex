import {isString} from '../utils'

export default (value, compare, root) => {
    if(isString(value)){
        if(value.length){
            if (value.toLowerCase() !== compare.toLowerCase()) {
                if (root) {
                    return new Error('$field must be same as $compare')
                }
                return false
            } else {
                return true
            }
        }
    }
}