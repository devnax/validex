import {isString} from '../utils'

export default (value, compare) => {
    if(isString(value)){
        if(value.length){
            return value.split(' ').length >= compare
        }
    }
    
}