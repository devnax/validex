
# validex

> The fastest and simple validator.

[![NPM](https://img.shields.io/npm/v/validex.svg)](https://www.npmjs.com/package/validex) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm install --save validex
```

## Usage

```js
import validex from 'validex'

const validator = validex(data: Object, options: Object)

validator.validate()
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
| lowercase   | all the charters must be lowercase. `(boolean)`|
| uppercase   | all the charters must be uppercase. `(boolean)`|
| capitalize  | required the first charter uppercase. `(boolean)`|
| hex    | check the value is hex or not. `(boolean)`|
| maxNumberRange   | check the maximum number range. `(integer)`|
| minNumberRange   | check the minimum number range. `(integer)`|
| maxWords       | check the maximum words length. `(integer)`|
| minWords       | check the minimum words length. `(integer)`|
| notAllowedChars| check the value contained the some charters or not. `(string)` example: `"abcd.#@"`|
| notAllowedSpecialChars       | `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/` these charters are not allowed, `(boolean)`|
| notAllowedWords   | check the value contained the some words or not. `(string)` example: `"Hello World, Propgrammer, any"`|
| compare     | validate the value by your self. `(function)`|
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

validator.validate()

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
        min: [10, "$field minumum charters of $compare"], // $compare will be replaced with 10
        max: 20,
        notAllowedSpecialChars: true,
	}
}

```

## Validator Methods

| Name     | Description |
| :---        |    :----   | 
|`set`| Set the data and schema individually. `set(fieldName, value, shema)` Schema will be an Object |
| `hasError`    | check the error is exists or not `@return boolean`. you can also check the field error with this `hasError('user_name') hasError('user_email')` |
| `errorMessage`  | get the first error message. If you pass the field name then you can get the the field first error message `errorMessage('user_name')`. `@return` error messsage or `null` |
|`getErrors`| get all the errors with an `object`. If you pass the field name then you can get just the field errors|
|`removeError`| if you want you can remove the field error. `removeError('user_name', 'min')` it will remove just user_name min type error|
|`removeErrors`| remove all field errors. `removeError('user_name')` it will remove all user_name errors.|
|`validate`| validating the data.|



## Validator Callback
You can set the validator callback. the call will call when you validate or remove error

```js
validator.callback = (type, validator) => {
    if(type === 'removeError'){

    }
}

```


## Compare
You validate the value by your self. `@return type boolean`.
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
        notAllowedSpecialChars,
        notAllowedWords,
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
    notAllowedChars(value, charters)
    notAllowedSpecialChars(value)
    notAllowedWords(value, 'Hello World, Programmer')

```



## License

MIT © [Naxrul Ahmed](https://github.com/Naxrul Ahmed)
