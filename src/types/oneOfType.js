import {isEmpty, isArray} from '../utils'
import isType from './isType'

export default (value, compare, root) => {
    if(!isArray(compare)){
        const message = "property must be an array"
        console.error(message)
        return new Error(message)
    }

    if(!isEmpty(value)){
        let perfect = false

        for(let t of compare){
            const check = isType(value, t)
            if(!(check instanceof Error)){
                perfect = true
                break
            }
        }
        if (!perfect) {
            if (root) {
                return new Error("$field must be one of type "+compare.join('|'))
            }
            return false
        } else {
            return true
        }
    }
}