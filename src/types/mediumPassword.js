import {isString} from '../utils'
let format = new RegExp('((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

export default (value) => {
    if(isString(value)){
        value = value.toString()
        if(value.length){
            if(!format.test(value)){
                return new Error('use 6 or more characters with a mix of letters, numbers & symbols in $field')
            }
        }
    }
    
}