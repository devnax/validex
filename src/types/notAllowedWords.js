import {isString} from '../utils'

export default (value, compare) => {
    if(isString(value)){
        if(value.length){
            const words = compare.replace(',', "|")
            const pattern = new RegExp(words)
            return  !value.match(pattern);
        }
    }
    
}