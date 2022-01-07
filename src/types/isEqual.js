import {isString} from '../utils'

export default (value, compare) => {
    if(isString(value)){
        if(value.length){
            if(value.toLowerCase() !== compare.toLowerCase()){
                return new Error('$field must be same as $compare')
            } else {
                return true
            }
        }
    }
}