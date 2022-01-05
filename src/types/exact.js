import {isString, isObject, isEmpty} from '../utils'
import validex from '../index'

export default (data, exactOb) => {
    
    if(!isObject(exactOb)){
        const message = "exact property must be an Object"
        console.error(message)
        return new Error(message)
    }  


    if(isObject(data)&& !isEmpty(data)){

        if(Object.keys(data).length != Object.keys(exactOb).length){
            return new Error('Pass invalid properties for $field')
        }

        let keys = []
        for(let key in data){
            if(!exactOb.hasOwnProperty(key)){
                keys.push(key)
            }
        }
        if(keys.length){
            return new Error('Pass invalid properties for $field')
        }
        const check = validex(data, exactOb)
        check.validate()
        if(check.hasError()){
            return new Error("$field "+Object.values(check.errors).join(', $field '))
        }
    }
}