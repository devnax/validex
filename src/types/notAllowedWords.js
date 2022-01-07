import {isString} from '../utils'

export default (value, compare, root) => {
    if(isString(value)){
        if(value.length){
            const words = compare.replace(',', "|")
            const pattern = new RegExp(words)
            if (value.match(pattern)) {
                if (root) {
                    return new Error('$compare these words are not allowed in $field')
                }
                return false
            } else {
                return true
            }
        }
    }
    
}