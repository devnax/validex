import {isObject, isFunction, isString, parseType} from './utils'

export default (TYPES, data, schema) => {
   

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

        return !root.hasError()
    }

    return root
}