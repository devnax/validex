import {isString} from '../utils'

export default (value) => {
    if(isString(value)){
        if(value.length){
            if(!value.toLowerCase().match(/ /g)){
                var res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
                if(res !== null){
                    return true
                }
            }
            return false
        }
    }

}