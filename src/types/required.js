import {isEmpty} from '../utils'

export default (value) => {
    if(isEmpty(value)){
        return new Error("$field required!")
    } else {
        return true
    }
}