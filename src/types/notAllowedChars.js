import {isString} from '../utils'

export default (value, compare) => {
    if(isString(value)){
        if(value.length){
            const format = new RegExp('['+compare+']')
            return !format.test(value)
        }
    }
    
}