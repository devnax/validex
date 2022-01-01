var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

import {isString} from '../utils'

export default (value, compare) => {
    if(isString(value)){
        if(value.length){
            return !format.test(value)
        }
    }
    
}