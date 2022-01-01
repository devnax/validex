import {isArray, isObject, isString, isInteger} from '../utils'

export default (value) => {
    if(!value){
        return false
    }else if(isString(value) || isArray(value)){
        return value.length ? true : false
    }else if(isObject(value)){
        return Object.keys(value).length ? true : false
    }else if(isInteger(value)){
        return value ? true : false
    }
}