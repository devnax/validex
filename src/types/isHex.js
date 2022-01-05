import {isString} from '../utils'
var format = /^#(?:[0-9a-fA-F]{3}){1,2}$/

export default (value) => {
    if(isString(value)){
        if(value.length){
            if(!format.test(value)) {
                return new Error('$field must be a hexadecimal characters')
            }
        }
    }
}