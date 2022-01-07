var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

import {isString} from '../utils'

export default (value, compare) => {
    if(isString(value)){
        if(value.length){
            if(format.test(value)){
                return new Error('special characters are not allowed in $field')
            } else {
                return true
            }
        }
    }
    
}