import {isEmpty} from '../utils'

export default (value, compare, root) => {
    if (compare === true && isEmpty(value)) {
        if (root) {
            return new Error("$field required!")
        }
        return false
    } else {
        return true
    }
}