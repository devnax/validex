import {isString} from '../utils'
export default (value) => {
    if(isString(value)){
        if(value.length){
            return value === value.toLowerCase()
        }
    }
}