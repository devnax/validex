import {isString} from '../utils'
export default (value) => {
    if(isString(value)){
        if(value.length && value !== value.replace(/(?:^|\s)\S/g, w => w.toUpperCase())){
            return new Error('$field must be capitalize!')
        } else {
            return true
        }
    }
}