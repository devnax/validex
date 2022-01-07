import {isString} from '../utils'
export default (value, compare, root) => {
    if(isString(value)){
        if(value.length && value !== value.replace(/(?:^|\s)\S/g, w => w.toUpperCase())){
            if (root) {
                return new Error('$field must be capitalize!')
            }
            return false
        } else {
            return true
        }
    }
}