
import Instance from './instance'
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
import isDate from './types/isDate'

export * from './utils'

export {
    isType,
    isEmail,
    isEqual,
    isUrl,
    isHex,
    isUpperCase,
    isLowerCase,
    isCapitalize,
    isDate,
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
    date: isDate,
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
export const validex = (data, schema) => Instance(TYPES, data, schema)
export default validex