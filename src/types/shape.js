import {isString, isObject, isEmpty} from '../utils'
import validex from '../index'

export default (data, shapeOb) => {
    
    if(!isObject(shapeOb)){
        const message = "shape property must be an Object"
        console.error(message)
        return new Error(message)
    }  

    if(isObject(data) && !isEmpty(data)){
        const check = validex(data, shapeOb)
        check.validate()
        if(check.hasError()){
            return new Error("$field "+Object.values(check.errors).join(', $field '))
        }
        
    }
}