import {isFunction} from '../utils'

export default (value, compare) => {

    if(!isFunction(compare)){
        console.error(`compare must be a function`)
        return false
    }

    if(value){
        const check = compare(value)
        if(typeof check === 'boolean'){
            return check
        }
    }
    
}