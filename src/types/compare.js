import {isFunction} from '../utils'

export default (value, compare, root) => {

    if(!isFunction(compare)){
        console.error('compare must be a function')
        return new Error('compare must be a function')
    }

    if(value){
        return compare(value, root)
    }
    
}