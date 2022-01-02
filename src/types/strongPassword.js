import {isString} from '../utils'
let format = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')

export default (value) => {
    if(isString(value)){
        value = value.toString()
        if(value.length){
            return format.test(value)
        }
    }
    
}