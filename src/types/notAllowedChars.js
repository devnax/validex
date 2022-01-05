import {isString} from '../utils'

export default (value, compare) => {
    if(isString(value)){
        if(value.length){
            const format = new RegExp('['+compare+']')
            if(format.test(value)){
                return new Error('$compare these characters are not allowed in $field')
            }
        }
    }
    
}