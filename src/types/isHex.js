import {isString} from '../utils'
var format = /[0-9A-Fa-f]{6}/g

export default (value) => {
    if(isString(value)){
        if(value.length){
            if(format.test(value)) {
                return true
            }
            return false
        }
    }
}