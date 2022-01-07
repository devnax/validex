import {isString} from '../utils'
export default (value) => {
    if(isString(value)){
        if(value.length){
            if(value !== value.toUpperCase()){
                return new Error('$field must be uppercase!')
            } else {
                return true
            }
        }
    }
}