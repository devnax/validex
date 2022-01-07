import {isString} from '../utils'
let format = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')

export default (value) => {
    if(isString(value)){
        value = value.toString()
        if(value.length){
            if(!format.test(value)){
                return new Error("Use $field 8 or more characters with a mix of letters, numbers & symbols.")
            } else {
                return true
            }
        }
    }
    
}