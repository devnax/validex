import {isString} from '../utils'

export default (value, compare, root) => {
    if(isString(value)){
        if(value.length){
            if (!(value.split(' ').length >= compare)) {
                if (root) {
                    return new Error('$field minimum words limit $compare')
                }
                return false
            } else {
                return true
            }
        }
    }
    
}