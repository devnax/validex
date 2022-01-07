import {isString} from '../utils'

export default (value, compare) => {
    if(isString(value)){
        if(value.length){
            if(!(value.split(' ').length <= compare)){
                return new Error('$field maximum words limit $compare')
            } else {
                return true
            }
        }
    }
    
}