import {isNumber} from '../utils'

export default (value, compare) => {
    if(isNumber(value) || isNumber(value)){
        if(value.toString().length){
           if(!(parseInt(value) <= parseInt(compare))){
               return new Error('$field maximum Range of $compare')
           } else {
                return true
            }
        }
    }
}