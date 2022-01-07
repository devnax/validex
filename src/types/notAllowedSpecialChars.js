var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

import {isString} from '../utils'

export default (value, compare, root) => {
    if(isString(value)){
        if(value.length){
            if (format.test(value)) {
                if (root) {
                    return new Error('special characters are not allowed in $field')
                }
                return false
            } else {
                return true
            }
        }
    }
    
}