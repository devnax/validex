import {isArray, isObject, isFunction, isString, parseType} from './utils'
import MESSAGES from './messages'

import min from './types/min'
import max from './types/max'
import isType from './types/isType'
import isEmail from './types/isEmail'
import compare from './types/compare'
import required from './types/required'
import isEqual from './types/isEqual'
import isUrl from './types/isUrl'
import minWords from './types/minWords'
import maxWords from './types/maxWords'
import isUpperCase from './types/isUpperCase'
import isLowerCase from './types/isLowerCase'
import isCapitalize from './types/isCapitalize'
import minNumberRange from './types/minNumberRange'
import maxNumberRange from './types/maxNumberRange'
import notAllowedChars from './types/notAllowedChars'
import notAllowedSpecialChars from './types/notAllowedSpecialChars'
import notAllowedWords from './types/notAllowedWords'
import isHex from './types/isHex'


export {
    isType,
    isEmail,
    isEqual,
    isUrl,
    isHex,
    isUpperCase,
    isLowerCase,
    isCapitalize,
    minWords,
    maxWords,
    minNumberRange,
    maxNumberRange,
    notAllowedChars,
    notAllowedSpecialChars,
    notAllowedWords,
}



const TYPES = {
    type: isType,
    email: isEmail,
    equal: isEqual,
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
    notAllowedSpecialChars,
    notAllowedWords,
}



/**
 * Validator
 */
export default (data, schema) => {
   
    
    const info = {
        data: isObject(data) ? data : {},
        schema: isObject(schema) ? schema : {},
        errors: {},
        callback: null,
        set: (name, value, _schema) => {
            info.data[name] = value
            info.schema[name] = _schema
        },
        hasError: (name) => {
            if(name === undefined){
                return Object.keys(info.errors).length ? true : false
            }
            if(info.errors.hasOwnProperty(name)){
                return Object.keys(info.errors[name]).length ? true : false
            }
        },
        errorMessage: (name) => {
            if(isString(name)){
                const errors = info.getErrors(name)
                if(errors){
                    return errors[Object.keys(errors)[0]]
                }
            }else{
                for(let name in info.data){
                    if(info.hasError(name)){
                        return info.errorMessage(name)
                    }
                }
            }
        },
        getErrors: (name) => {
            if(!name){
                return info.errors
            }
            if(info.errors.hasOwnProperty(name)){
                return Object.keys(info.errors[name]) ? info.errors[name] : false
            }
        },
        removeError: (name, type) => {
            const errors = info.getErrors(name)
            if(errors){
                if(errors.hasOwnProperty(type)){
                    delete info.errors[name][type]
                    if(isFunction(info.callback)){
                        info.callback('removeError', info)
                    }
                }
            }
        },
        removeErrors: (name) => {
            if(info.hasError(name)){
                delete info.errors[name]
                if(isFunction(info.callback)){
                    info.callback('removeErrors', info)
                }
            }
        }
    }

    info.validate = () => {
        
        // comparing
        for(let fieldName in info.data){
            if(info.schema[fieldName]){
                
                let value = info.data[fieldName]
                const schem = info.schema[fieldName]
                if(isString(value)){
                    value = value.trim()
                }
                if(!isObject(schem)){
                    console.error(new Error(`You passed wrong format in the schema for this ${fieldName}`))
                    break;
                }

                for(let type in schem){

                    // avoid some fields
                    if(type == 'nameAlias'){
                        continue
                    }


                    if(TYPES.hasOwnProperty(type)){

                        let {message, compareVal} = parseType(schem[type])
                        const compared = TYPES[type](value, compareVal)

                        if(compared === false){
                            const field = schem['nameAlias'] || fieldName
                            if(!message && MESSAGES.hasOwnProperty(type)){
                                message = MESSAGES[type]
                            }
                            message = message.replace('$field', field)
                            message = message.replace('$compare', schem[type])

                            if(!isArray(info.errors[fieldName])){
                                info.errors[fieldName] = {}
                            }
                            info.errors[fieldName][type] = message
                        }else{
                            info.removeError(fieldName, type)
                        }
                        
                    }
                }
            }
        }

        if(isFunction(info.callback)){
            info.callback('validate', info)
        }
    }

    return info
}
