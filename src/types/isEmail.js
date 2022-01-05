import {isString} from '../utils'

export default (value) => {
    if(isString(value)){
        if(value.length){
            const valid = value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            if(valid == null){
                return new Error('$field must be an email!')
            }
        }
    }
}