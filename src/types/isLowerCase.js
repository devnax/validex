import {isString} from '../utils'
export default (value) => {
    if(isString(value)){
        if(value.length){
            if(value !== value.toLowerCase()){
                return new Error('$field must be lowercase!')
            }
        }
    }
}