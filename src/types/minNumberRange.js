import {isNumber} from '../utils'

export default (value, compare, root) => {
    if(isNumber(value) || isNumber(value)){
        if(value.toString().length){
            if (!(parseInt(value) >= parseInt(compare))) {
                if (root) {
                    return new Error('$field minimum Range of $compare')
                }
                return false
            } else {
                return true
            }
        }
    }
}