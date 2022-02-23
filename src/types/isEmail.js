import {isString} from '../utils'

export default (value, compare, root) => {
    
    if(compare === true && isString(value)){
        if(value.length){
            const valid = value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            if (valid == null) {
                if (root) {
                    return new Error('$field must be an email!')
                }
                return false
            } else {
                return true
            }
        }
    }
}