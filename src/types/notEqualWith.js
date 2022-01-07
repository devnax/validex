import {isString} from '../utils'

export default (value, field_name, {root}) => {

    if(isString(value)){
        if(value.length){
            if(root.data.hasOwnProperty(field_name)){
                const fieldValue = root.data[field_name]
                if(value.toLowerCase() === fieldValue.toLowerCase()){
                    return new Error("$field not be equal with $compare")
                } else {
                    return true
                }
            }else{
                console.error(`${field_name} is not exists in data object`)
            }
        }
    }
}