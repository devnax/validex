
# validex

> The fastest and simple validator.

[![NPM](https://img.shields.io/npm/v/validex.svg)](https://www.npmjs.com/package/validex) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm install --save validex
```

> use it with react [react-validex](https://www.npmjs.com/package/react-validex)


## Usage

```js
import validex from 'validex'

const validator = validex(data: Object, options: Object)

if(validator.validate()){

}
```


## Options

| Validate     | Description |
| :---        |    :----   | 
| required       | value must be required. `(boolean)`|
| type       | `string,number,array,object,bool` check the value type. `(string)`|
| min         | check the string's minimum length. `(integer)`|
| max         | check the string's maximum length. `(integer)`|
| email       | value must be an email. `(boolean)`|
| url         | value must be an url. `(boolean)`|
| equal       | value must be equal. `(string)`|
| lowercase   | all the characters must be lowercase. `(boolean)`|
| uppercase   | all the characters must be uppercase. `(boolean)`|
| capitalize  | required the first charter uppercase. `(boolean)`|
| hex    | check the value is hex or not. `(boolean)`|
| maxNumberRange   | check the maximum number range. `(integer)`|
| minNumberRange   | check the minimum number range. `(integer)`|
| maxWords       | check the maximum words length. `(integer)`|
| minWords       | check the minimum words length. `(integer)`|
| notAllowedChars| check the value contained the some characters or not. `(string)` example: `"abcd.#@"`|
| notAllowedCharacters| `a-zA-Z` characters are not allowed. `(boolean)`|
| notAlloweNumber| `0-9` numbers are not allowed. `(boolean)`|
| notAllowedSpecialChars       | `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/` these characters are not allowed, `(boolean)`|
| notAllowedWords   | check the value contained the some words or not. `(string)` example: `"Hello World, Propgrammer, any"`|
| compare     | validate the value by your self. `(function)`|
| regex     | compare with regular expression. `(Regex)`|
| strongPassword     | 8 or more characters with a mix of letters, numbers & symbols. `(boolean)`|
| mediumPassword     | 6 or more characters with a mix of letters, numbers & symbols. `(boolean)`|
| nameAlias     | just replace the field name. `(string)`|


### Example
```js
import validex from  'validex'

const data = {
	user_name: 'Jhon Doe',
	user_email: 'yourname@example.com',
	user_age: 20
}
const schema = {
	user_name: {
        nameAlias: "User Name",
        required: true,
        type: 'string',
        capitalize: true,
        notAllowedSpecialChars: true
	},
	user_email: {
        nameAlias: "Email",
        email: true,
        lowercase: true
	},
	user_age: {
        nameAlias: "Age",
        type: 'number',
        minNumberRange: 18,
        maxNumberRange: 30
	}
}
const validator =  validex(data, schema)

const isValidate = validator.validate()

if(isValidate){
	// .....
}

// Or You can the hasError function
if(!validator.hasError()){
	// .....
}


```

### Schema format

In the schema property you can pass single option or you can pass an array.
the array contained two indexes

- 1. Property type
- 2. Error message

#### Example

```js

const schema = {
	user_name: {
        required: [true, "$field must be required"], // or you can pass the arra
        type: ['string', "$field must be type of string"],
        min: [10, "$field minumum characters of $compare"], // $compare will be replaced with 10
        max: 20,
        notAllowedSpecialChars: true,
	}
}

```

## Validator Methods

| Name     | Description |
| :---        |    :----   | 
|`set`| Set the data and schema individually. `set(fieldName, value, shema)` Schema will be an Object |
| `hasError`    | check the error is exists or not `@return boolean`. you can also check the field error with this `hasError('user_name')` |
|`getError`| get all the errors with an `object`. If you pass the field name then you can get just the field error message|
|`removeError`| if you want you can remove the field error. `removeError('user_name', 'min')` it will remove just user_name min type error|
|`validate`| validating the data.|



## Validator Callback
It will call when validate and removeError function call

```js
validator.callback = (type, validator) => {
    if(type === 'removeError'){

    }
}

```


## Compare
You can validate the value by your self. `@return type boolean`.
```js
    {
        compare: (value) => {
            if(typeof value === 'string' && value.length === 20){
                return true
            }
        }
    }
```




## Individually Import
```js

    import {
        isType,
        isEmail,
        isEqual,
        isUrl,
        isUpperCase,
        isLowerCase,
        isCapitalize,
        isHex,
        minWords,
        maxWords,
        minNumberRange,
        maxNumberRange,
        notAllowedChars,
        notAllowedCharacters,
        notAllowedNumber,
        notAllowedSpecialChars,
        notAllowedWords,
        regex
    } from 'validex'

    // every function has two arguments
    // first is value second is compare value

    isType(value, 'numbe|object|array|string|bool')
    isEmail(value)
    isEqual(value, compareValue)
    isUrl(value)
    isUpperCase(value)
    isLowerCase(value)
    isCapitalize(value)
    isHex(value)
    minWords(value, length)
    maxWords(value, length)
    minNumberRange(value, length)
    maxNumberRange(value, length)
    notAllowedChars(value, characters)
    notAllowedCharacters(value)
    notAllowedNumber(value)
    notAllowedSpecialChars(value)
    notAllowedWords(value, 'Hello World, Programmer')
    regex(value, expression),
    strongPassword(value),
    mediumPassword(value),
```


