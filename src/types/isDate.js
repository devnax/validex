import {isString} from '../utils'

export default (value, compare, root) => {
	let date;

	if(compare !== true){
		return false
	}

	if(isString(value)){
		if(value.length){
			date = new Date(value)
		}
	}
	
	
	if(date instanceof Date){
		if(date.toString() === 'Invalid Date'){
			if (root) {
				return new Error('$field must be date formate')
		  	}
			return false
		}else{
			return true
		}
	}
}