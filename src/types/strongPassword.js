import {isString} from '../utils'
let format = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')

export default (value, compare, root) => {
    if(isString(value)){
        value = value.toString()
        if(value.length){
            if (!format.test(value)) {
                if (root) {
                    return new Error("Use $field 8 or more characters with a mix of letters, numbers & symbols.")
                }
                return false
            } else {
                return true
            }
        }
    }
}