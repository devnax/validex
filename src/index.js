import {isObject, isFunction, isString, parseType} from './utils'
export * from './utils'

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
import notAllowedCharacters from './types/notAllowedCharacters'
import notAllowedSpecialChars from './types/notAllowedSpecialChars'
import notAllowedWords from './types/notAllowedWords'
import isHex from './types/isHex'
import notAllowedNumber from './types/notAllowedNumber'
import regex from './types/regex'
import strongPassword from './types/strongPassword'
import mediumPassword from './types/mediumPassword'
import notEqualWith from './types/notEqualWith'
import oneOfType from './types/oneOfType'
import oneOf from './types/oneOf'
import exact from './types/exact'
import shape from './types/shape'



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
    notAllowedCharacters,
    notAllowedSpecialChars,
    notAllowedWords,
    notAllowedNumber,
    regex,
    strongPassword,
    mediumPassword,
    oneOf,
    oneOfType,
    exact,
    shape
}



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
    exact,
    shape
}



/**
 * Validator
 */
export default (data, schema) => {
   
    
    const root = {
        data: isObject(data) ? data : {},
        schema: isObject(schema) ? schema : {},
        errors: {},
        callback: null,
        set: (name, value, _schema) => {
            root.data[name] = value
            root.schema[name] = _schema
        },
        hasError: (name) => {
            if(name === undefined){
                return Object.keys(root.errors).length ? true : false
            }
            if(root.errors[name]){
                return true
            }
        },
        getError: (name) => {
            if(!name){
                return root.errors
            }
            
            return root.errors[name]
        },
        removeError: (name) => {
            if(root.errors[name]){
                delete root.errors[name]
                if(isFunction(root.callback)){
                    root.callback('removeError', root)
                }
            }
        }
    }

    root.validate = () => {
        
        // comparing
        for(let fieldName in root.data){
            if(root.schema[fieldName]){
                
                let value = root.data[fieldName]
                const schem = root.schema[fieldName]
                if(isString(value)){
                    value = value.trim()
                }
                if(!isObject(schem)){
                    console.error(`You passed wrong format in the schema for this ${fieldName}`)
                    break;
                }

                for(let type in schem){

                    // avoid some fields
                    if(type == 'nameAlias'){
                        continue
                    }

                    if(TYPES.hasOwnProperty(type)){

                        if(root.hasError(fieldName)){
                            break;
                        }
                        const nameAlias = schem['nameAlias'] || fieldName
                        let {error, compareVal} = parseType(schem[type])

                        const isError = TYPES[type](value, compareVal, {root, fieldName, type, nameAlias, prop: schem[type]})
                        if(isError instanceof Error){
                            let message = ''

                            if(!(error instanceof Error)){
                                message = isError.message
                            }else{
                                message = error.message
                            }

                            message = message.replace(/\$field/g, nameAlias)
                            message = message.replace(/\$compare/g, schem[type])
                            root.errors[fieldName] = message
                        }
                    }else{
                        console.error(`Invalide type ${type}`)
                    }
                }
            }
        }


        if(isFunction(root.callback)){
            root.callback('validate', root)
        }

        return root.hasError()
    }

    return root
}
