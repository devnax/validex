import {isNumber} from '../utils'

export default (value, compare) => {
    if(isNumber(value) || isNumber(value)){
        if(value.toString().length){
            return parseInt(value) >= parseInt(compare)
        }
    }
}