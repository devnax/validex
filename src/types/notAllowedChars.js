import {isString} from '../utils'

export default (value, compare, root) => {
    if(isString(value)){
        if(value.length){
            const format = new RegExp('['+compare+']')
            if (format.test(value)) {
                if (root) {
                    return new Error('$compare these characters are not allowed in $field')
                }
                return false
            } else {
                return true
            }
        }
    }
    
}