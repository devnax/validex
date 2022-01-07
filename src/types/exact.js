import {isObject, isEmpty} from '../utils'
import min from './min'
import max from './max'
import isType from './isType'
import isEmail from './isEmail'
import compare from './compare'
import required from './required'
import isEqual from './isEqual'
import isUrl from './isUrl'
import minWords from './minWords'
import maxWords from './maxWords'
import isUpperCase from './isUpperCase'
import isLowerCase from './isLowerCase'
import isCapitalize from './isCapitalize'
import minNumberRange from './minNumberRange'
import maxNumberRange from './maxNumberRange'
import notAllowedChars from './notAllowedChars'
import notAllowedCharacters from './notAllowedCharacters'
import notAllowedSpecialChars from './notAllowedSpecialChars'
import notAllowedWords from './notAllowedWords'
import isHex from './isHex'
import notAllowedNumber from './notAllowedNumber'
import regex from './regex'
import strongPassword from './strongPassword'
import mediumPassword from './mediumPassword'
import notEqualWith from './notEqualWith'
import oneOfType from './oneOfType'
import oneOf from './oneOf'

import Instance from '../instance'

const TYPES = {
    type: isType,
    email: isEmail,
    equal: isEqual,
    notEqualWith,
    url: isUrl,
    hex: isHex,
    uppercase: isUpperCase,
    lowercase: isLowerCase,
    capitalize: isCapitalize,
    min,
    max,
    compare,
    required,
    minWords,
    maxWords,
    minNumberRange,
    maxNumberRange,
    notAllowedChars,
    notAllowedCharacters, 
    notAllowedSpecialChars,
    notAllowedWords,
    notAllowedNumber,
    regex,
    strongPassword,
    mediumPassword,
    oneOf,
    oneOfType,
}

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
        const check = Instance(TYPES, data, exactOb)
        check.validate()
        if(check.hasError()){
            return new Error("$field "+Object.values(check.errors).join(', $field '))
        } else {
            return true
        }
    }
}