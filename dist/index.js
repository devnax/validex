function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "validex", () => $408b6120c5d8a21f$export$dc9851424e3aa5dc);
$parcel$export(module.exports, "default", () => $408b6120c5d8a21f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "isType", () => $0dc62a8790cee7af$export$2e2bcd8739ae039);
$parcel$export(module.exports, "isEmail", () => $45a2c203fb42db2c$export$2e2bcd8739ae039);
$parcel$export(module.exports, "isEqual", () => $3663b7ea1b937ee7$export$2e2bcd8739ae039);
$parcel$export(module.exports, "isUrl", () => $18930b847e76f420$export$2e2bcd8739ae039);
$parcel$export(module.exports, "isHex", () => $cf113bad101eed60$export$2e2bcd8739ae039);
$parcel$export(module.exports, "isUpperCase", () => $c05407ac98285c88$export$2e2bcd8739ae039);
$parcel$export(module.exports, "isLowerCase", () => $a983def8f24061df$export$2e2bcd8739ae039);
$parcel$export(module.exports, "isCapitalize", () => $b0f389b4b687e843$export$2e2bcd8739ae039);
$parcel$export(module.exports, "minWords", () => $1927745a68e2ae86$export$2e2bcd8739ae039);
$parcel$export(module.exports, "maxWords", () => $0b0cee6eb813ce3f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "minNumberRange", () => $c8d744b461fe26f0$export$2e2bcd8739ae039);
$parcel$export(module.exports, "maxNumberRange", () => $1c26afe30357d381$export$2e2bcd8739ae039);
$parcel$export(module.exports, "notAllowedChars", () => $bfe321388da19f12$export$2e2bcd8739ae039);
$parcel$export(module.exports, "notAllowedCharacters", () => $598ffc6680c01d87$export$2e2bcd8739ae039);
$parcel$export(module.exports, "notAllowedSpecialChars", () => $693f83de18183c75$export$2e2bcd8739ae039);
$parcel$export(module.exports, "notAllowedWords", () => $ec06ef7ccd14f506$export$2e2bcd8739ae039);
$parcel$export(module.exports, "notAllowedNumber", () => $3c924d77ff8f2d79$export$2e2bcd8739ae039);
$parcel$export(module.exports, "regex", () => $431ffb642a3e026b$export$2e2bcd8739ae039);
$parcel$export(module.exports, "strongPassword", () => $e13bf96212666dc0$export$2e2bcd8739ae039);
$parcel$export(module.exports, "mediumPassword", () => $edd1e9bd3fe67bfc$export$2e2bcd8739ae039);
$parcel$export(module.exports, "oneOf", () => $fd160910cc7fca43$export$2e2bcd8739ae039);
$parcel$export(module.exports, "oneOfType", () => $fd7f2946b4a5b9f0$export$2e2bcd8739ae039);
$parcel$export(module.exports, "exact", () => $0a7e1ac82e3fa83a$export$2e2bcd8739ae039);
$parcel$export(module.exports, "shape", () => $15f3e192ef8b4889$export$2e2bcd8739ae039);
var $83e75da502114ee3$exports = {};

$parcel$export($83e75da502114ee3$exports, "isFunction", () => $83e75da502114ee3$export$f6e2535fb5126e54);
$parcel$export($83e75da502114ee3$exports, "isArray", () => $83e75da502114ee3$export$43bee75e5e14138e);
$parcel$export($83e75da502114ee3$exports, "isObject", () => $83e75da502114ee3$export$a6cdc56e425d0d0a);
$parcel$export($83e75da502114ee3$exports, "isString", () => $83e75da502114ee3$export$844ec244b1367d54);
$parcel$export($83e75da502114ee3$exports, "isNumber", () => $83e75da502114ee3$export$7e4aa119212bc614);
$parcel$export($83e75da502114ee3$exports, "isInteger", () => $83e75da502114ee3$export$a287f47fed4544b8);
$parcel$export($83e75da502114ee3$exports, "isBool", () => $83e75da502114ee3$export$28ac561dc09c20ca);
$parcel$export($83e75da502114ee3$exports, "isEmpty", () => $83e75da502114ee3$export$dd1bc94b04021eeb);
$parcel$export($83e75da502114ee3$exports, "parseType", () => $83e75da502114ee3$export$28b8f402ccc88182);
const $83e75da502114ee3$export$f6e2535fb5126e54 = (val)=>typeof val === 'function' ? true : false
;
const $83e75da502114ee3$export$43bee75e5e14138e = (val)=>typeof val === 'object' && Array.isArray(val) ? true : false
;
const $83e75da502114ee3$export$a6cdc56e425d0d0a = (val)=>typeof val === 'object' && val !== null && !Array.isArray(val) ? true : false
;
const $83e75da502114ee3$export$844ec244b1367d54 = (val)=>typeof val === 'string' ? true : false
;
const $83e75da502114ee3$export$7e4aa119212bc614 = (val)=>!isNaN(val) ? true : false
;
const $83e75da502114ee3$export$a287f47fed4544b8 = (val)=>typeof val === 'number' ? true : false
;
const $83e75da502114ee3$export$28ac561dc09c20ca = (val)=>typeof val === 'boolean' ? true : false
;
const $83e75da502114ee3$export$dd1bc94b04021eeb = (val)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(val) || $83e75da502114ee3$export$43bee75e5e14138e(val)) return !val.length;
    else if ($83e75da502114ee3$export$a6cdc56e425d0d0a(val)) return !Object.keys(val).length;
    else if (!val) return true;
};
const $83e75da502114ee3$export$28b8f402ccc88182 = (compare)=>{
    let error = null;
    let compareVal = compare;
    if ($83e75da502114ee3$export$43bee75e5e14138e(compare) && compare.length === 2 && compare[1] instanceof Error) {
        compareVal = compare[0];
        error = compare[1];
    }
    return {
        error: error,
        compareVal: compareVal
    };
};


var $5a95543c0f9fde5b$export$2e2bcd8739ae039 = (TYPES, data, schema)=>{
    const root = {
        data: $83e75da502114ee3$export$a6cdc56e425d0d0a(data) ? data : {
        },
        schema: $83e75da502114ee3$export$a6cdc56e425d0d0a(schema) ? schema : {
        },
        errors: {
        },
        callback: null,
        set: (name, value, _schema)=>{
            root.data[name] = value;
            root.schema[name] = _schema;
        },
        hasError: (name)=>{
            if (name === undefined) return Object.keys(root.errors).length ? true : false;
            if (root.errors[name]) return true;
        },
        getError: (name)=>{
            if (!name) return root.errors;
            return root.errors[name];
        },
        removeError: (name)=>{
            if (root.errors[name]) {
                delete root.errors[name];
                if ($83e75da502114ee3$export$f6e2535fb5126e54(root.callback)) root.callback('removeError', root);
            }
        }
    };
    root.validate = ()=>{
        // comparing
        for(let fieldName in root.data)if (root.schema[fieldName]) {
            let value = root.data[fieldName];
            const schem = root.schema[fieldName];
            if ($83e75da502114ee3$export$844ec244b1367d54(value)) value = value.trim();
            if (!$83e75da502114ee3$export$a6cdc56e425d0d0a(schem)) {
                console.error(`You passed wrong format in the schema for this ${fieldName}`);
                break;
            }
            for(let type in schem){
                // avoid some fields
                if (type == 'nameAlias') continue;
                if (TYPES.hasOwnProperty(type)) {
                    if (root.hasError(fieldName)) break;
                    const nameAlias = schem['nameAlias'] || fieldName;
                    let { error: error , compareVal: compareVal  } = $83e75da502114ee3$export$28b8f402ccc88182(schem[type]);
                    const isError = TYPES[type](value, compareVal, {
                        root: root,
                        fieldName: fieldName,
                        type: type,
                        nameAlias: nameAlias,
                        prop: schem[type]
                    });
                    if (isError instanceof Error) {
                        let message = '';
                        if (!(error instanceof Error)) message = isError.message;
                        else message = error.message;
                        message = message.replace(/\$field/g, nameAlias);
                        message = message.replace(/\$compare/g, schem[type]);
                        root.errors[fieldName] = message;
                    }
                } else console.error(`Invalide type ${type}`);
            }
        }
        if ($83e75da502114ee3$export$f6e2535fb5126e54(root.callback)) root.callback('validate', root);
        return !root.hasError();
    };
    return root;
};



var $8ad481c9cf5a4ab7$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.length >= compare)) return new Error('$field minimum length of $compare');
            else return true;
        }
    }
};



var $9dcc3cb90128f63d$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.length <= compare)) return new Error('$field maximum length of $compare');
            else return true;
        }
    }
};



const $0dc62a8790cee7af$var$types = {
    bool: (val)=>typeof val === 'boolean'
    ,
    number: (val)=>!isNaN(val)
    ,
    string: (val)=>$83e75da502114ee3$export$844ec244b1367d54(val)
    ,
    array: (val)=>$83e75da502114ee3$export$43bee75e5e14138e(val)
    ,
    object: (val)=>$83e75da502114ee3$export$a6cdc56e425d0d0a(val)
};
var $0dc62a8790cee7af$export$2e2bcd8739ae039 = (value, compare)=>{
    if (value) {
        if (!$0dc62a8790cee7af$var$types.hasOwnProperty(compare)) {
            message = `Invalide type given`;
            console.error(message, `Available Types are ${Object.keys($0dc62a8790cee7af$var$types).join(', ')}`);
            return new Error(message);
        }
        if (!$0dc62a8790cee7af$var$types[compare](value)) return new Error('$field must be $compare');
        else return true;
    }
};



var $45a2c203fb42db2c$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            const valid = value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (valid == null) return new Error('$field must be an email!');
            else return true;
        }
    }
};



var $05debb3ed4f142bb$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if (!$83e75da502114ee3$export$f6e2535fb5126e54(compare)) {
        console.error('compare must be a function');
        return new Error('compare must be a function');
    }
    if (value) return compare(value, root);
};



var $58cbff7fef638a81$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$dd1bc94b04021eeb(value)) return new Error("$field required!");
    else return true;
};



var $3663b7ea1b937ee7$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (value.toLowerCase() !== compare.toLowerCase()) return new Error('$field must be same as $compare');
            else return true;
        }
    }
};



var $18930b847e76f420$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!value.toLowerCase().match(/ /g)) {
                var res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
                if (res == null) return new Error('$field must be a valid URL');
                else return true;
            }
        }
    }
};



var $1927745a68e2ae86$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.split(' ').length >= compare)) return new Error('$field minimum words limit $compare');
            else return true;
        }
    }
};



var $0b0cee6eb813ce3f$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.split(' ').length <= compare)) return new Error('$field maximum words limit $compare');
            else return true;
        }
    }
};



var $c05407ac98285c88$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (value !== value.toUpperCase()) return new Error('$field must be uppercase!');
            else return true;
        }
    }
};



var $a983def8f24061df$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (value !== value.toLowerCase()) return new Error('$field must be lowercase!');
            else return true;
        }
    }
};



var $b0f389b4b687e843$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length && value !== value.replace(/(?:^|\s)\S/g, (w)=>w.toUpperCase()
        )) return new Error('$field must be capitalize!');
        else return true;
    }
};



var $c8d744b461fe26f0$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$7e4aa119212bc614(value) || $83e75da502114ee3$export$7e4aa119212bc614(value)) {
        if (value.toString().length) {
            if (!(parseInt(value) >= parseInt(compare))) return new Error('$field minimum Range of $compare');
            else return true;
        }
    }
};



var $1c26afe30357d381$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$7e4aa119212bc614(value) || $83e75da502114ee3$export$7e4aa119212bc614(value)) {
        if (value.toString().length) {
            if (!(parseInt(value) <= parseInt(compare))) return new Error('$field maximum Range of $compare');
            else return true;
        }
    }
};



var $bfe321388da19f12$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            const format = new RegExp('[' + compare + ']');
            if (format.test(value)) return new Error('$compare these characters are not allowed in $field');
            else return true;
        }
    }
};



var $598ffc6680c01d87$var$format = /^([^a-zA-Z]*)$/;
var $598ffc6680c01d87$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value) || $83e75da502114ee3$export$7e4aa119212bc614(value)) {
        value = value.toString();
        if (value.length) {
            if (!$598ffc6680c01d87$var$format.test(value)) return new Error('characters are not allowed in $field');
            else return true;
        }
    }
};



var $693f83de18183c75$var$format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var $693f83de18183c75$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if ($693f83de18183c75$var$format.test(value)) return new Error('special characters are not allowed in $field');
            else return true;
        }
    }
};



var $ec06ef7ccd14f506$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            const words = compare.replace(',', "|");
            const pattern = new RegExp(words);
            if (value.match(pattern)) return new Error('$compare these words are not allowed in $field');
            else return true;
        }
    }
};



var $cf113bad101eed60$var$format = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
var $cf113bad101eed60$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!$cf113bad101eed60$var$format.test(value)) return new Error('$field must be a hexadecimal characters');
            else return true;
        }
    }
};



var $3c924d77ff8f2d79$var$format = /^([^0-9]*)$/;
var $3c924d77ff8f2d79$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value) || $83e75da502114ee3$export$7e4aa119212bc614(value)) {
        value = value.toString();
        if (value.length) {
            if (!$3c924d77ff8f2d79$var$format.test(value)) return new Error('number are not allowed in $field');
            else return true;
        }
    }
};



var $431ffb642a3e026b$export$2e2bcd8739ae039 = (value, compare)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value) || $83e75da502114ee3$export$7e4aa119212bc614(value)) {
        value = value.toString();
        if (value.length) {
            if (!compare.test(value)) return new Error("Invalid value");
            else return true;
        }
    }
};



let $e13bf96212666dc0$var$format = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
var $e13bf96212666dc0$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        value = value.toString();
        if (value.length) {
            if (!$e13bf96212666dc0$var$format.test(value)) return new Error("Use $field 8 or more characters with a mix of letters, numbers & symbols.");
            else return true;
        }
    }
};



let $edd1e9bd3fe67bfc$var$format = new RegExp('((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
var $edd1e9bd3fe67bfc$export$2e2bcd8739ae039 = (value)=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        value = value.toString();
        if (value.length) {
            if (!$edd1e9bd3fe67bfc$var$format.test(value)) return new Error('use 6 or more characters with a mix of letters, numbers & symbols in $field');
            else return true;
        }
    }
};



var $eade55b204e386c9$export$2e2bcd8739ae039 = (value, field_name, { root: root  })=>{
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (root.data.hasOwnProperty(field_name)) {
                const fieldValue = root.data[field_name];
                if (value.toLowerCase() === fieldValue.toLowerCase()) return new Error("$field not be equal with $compare");
                else return true;
            } else console.error(`${field_name} is not exists in data object`);
        }
    }
};




var $fd7f2946b4a5b9f0$export$2e2bcd8739ae039 = (value, compare)=>{
    if (!$83e75da502114ee3$export$43bee75e5e14138e(compare)) {
        const message = "property must be an array";
        console.error(message);
        return new Error(message);
    }
    if (!$83e75da502114ee3$export$dd1bc94b04021eeb(value)) {
        let perfect = false;
        for (let t of compare){
            const check = $0dc62a8790cee7af$export$2e2bcd8739ae039(value, t);
            if (!(check instanceof Error)) {
                perfect = true;
                break;
            }
        }
        if (!perfect) return new Error("$field must be one of type " + compare.join('|'));
        else return true;
    }
};



var $fd160910cc7fca43$export$2e2bcd8739ae039 = (value, compare)=>{
    if (!$83e75da502114ee3$export$43bee75e5e14138e(compare)) {
        const message = "property must be an array";
        console.error(message);
        return new Error(message);
    }
    if ($83e75da502114ee3$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!compare.includes(value)) return new Error("$field must be one of " + compare.join('|'));
            else return true;
        }
    }
};































const $0a7e1ac82e3fa83a$var$TYPES = {
    type: $0dc62a8790cee7af$export$2e2bcd8739ae039,
    email: $45a2c203fb42db2c$export$2e2bcd8739ae039,
    equal: $3663b7ea1b937ee7$export$2e2bcd8739ae039,
    notEqualWith: $eade55b204e386c9$export$2e2bcd8739ae039,
    url: $18930b847e76f420$export$2e2bcd8739ae039,
    hex: $cf113bad101eed60$export$2e2bcd8739ae039,
    uppercase: $c05407ac98285c88$export$2e2bcd8739ae039,
    lowercase: $a983def8f24061df$export$2e2bcd8739ae039,
    capitalize: $b0f389b4b687e843$export$2e2bcd8739ae039,
    min: $8ad481c9cf5a4ab7$export$2e2bcd8739ae039,
    max: $9dcc3cb90128f63d$export$2e2bcd8739ae039,
    compare: $05debb3ed4f142bb$export$2e2bcd8739ae039,
    required: $58cbff7fef638a81$export$2e2bcd8739ae039,
    minWords: $1927745a68e2ae86$export$2e2bcd8739ae039,
    maxWords: $0b0cee6eb813ce3f$export$2e2bcd8739ae039,
    minNumberRange: $c8d744b461fe26f0$export$2e2bcd8739ae039,
    maxNumberRange: $1c26afe30357d381$export$2e2bcd8739ae039,
    notAllowedChars: $bfe321388da19f12$export$2e2bcd8739ae039,
    notAllowedCharacters: $598ffc6680c01d87$export$2e2bcd8739ae039,
    notAllowedSpecialChars: $693f83de18183c75$export$2e2bcd8739ae039,
    notAllowedWords: $ec06ef7ccd14f506$export$2e2bcd8739ae039,
    notAllowedNumber: $3c924d77ff8f2d79$export$2e2bcd8739ae039,
    regex: $431ffb642a3e026b$export$2e2bcd8739ae039,
    strongPassword: $e13bf96212666dc0$export$2e2bcd8739ae039,
    mediumPassword: $edd1e9bd3fe67bfc$export$2e2bcd8739ae039,
    oneOf: $fd160910cc7fca43$export$2e2bcd8739ae039,
    oneOfType: $fd7f2946b4a5b9f0$export$2e2bcd8739ae039
};
var $0a7e1ac82e3fa83a$export$2e2bcd8739ae039 = (data, exactOb)=>{
    if (!$83e75da502114ee3$export$a6cdc56e425d0d0a(exactOb)) {
        const message = "exact property must be an Object";
        console.error(message);
        return new Error(message);
    }
    if ($83e75da502114ee3$export$a6cdc56e425d0d0a(data) && !$83e75da502114ee3$export$dd1bc94b04021eeb(data)) {
        if (Object.keys(data).length != Object.keys(exactOb).length) return new Error('Pass invalid properties for $field');
        let keys = [];
        for(let key in data)if (!exactOb.hasOwnProperty(key)) keys.push(key);
        if (keys.length) return new Error('Pass invalid properties for $field');
        const check = $5a95543c0f9fde5b$export$2e2bcd8739ae039($0a7e1ac82e3fa83a$var$TYPES, data, exactOb);
        check.validate();
        if (check.hasError()) return new Error("$field " + Object.values(check.errors).join(', $field '));
        else return true;
    }
};































const $15f3e192ef8b4889$var$TYPES = {
    type: $0dc62a8790cee7af$export$2e2bcd8739ae039,
    email: $45a2c203fb42db2c$export$2e2bcd8739ae039,
    equal: $3663b7ea1b937ee7$export$2e2bcd8739ae039,
    notEqualWith: $eade55b204e386c9$export$2e2bcd8739ae039,
    url: $18930b847e76f420$export$2e2bcd8739ae039,
    hex: $cf113bad101eed60$export$2e2bcd8739ae039,
    uppercase: $c05407ac98285c88$export$2e2bcd8739ae039,
    lowercase: $a983def8f24061df$export$2e2bcd8739ae039,
    capitalize: $b0f389b4b687e843$export$2e2bcd8739ae039,
    min: $8ad481c9cf5a4ab7$export$2e2bcd8739ae039,
    max: $9dcc3cb90128f63d$export$2e2bcd8739ae039,
    compare: $05debb3ed4f142bb$export$2e2bcd8739ae039,
    required: $58cbff7fef638a81$export$2e2bcd8739ae039,
    minWords: $1927745a68e2ae86$export$2e2bcd8739ae039,
    maxWords: $0b0cee6eb813ce3f$export$2e2bcd8739ae039,
    minNumberRange: $c8d744b461fe26f0$export$2e2bcd8739ae039,
    maxNumberRange: $1c26afe30357d381$export$2e2bcd8739ae039,
    notAllowedChars: $bfe321388da19f12$export$2e2bcd8739ae039,
    notAllowedCharacters: $598ffc6680c01d87$export$2e2bcd8739ae039,
    notAllowedSpecialChars: $693f83de18183c75$export$2e2bcd8739ae039,
    notAllowedWords: $ec06ef7ccd14f506$export$2e2bcd8739ae039,
    notAllowedNumber: $3c924d77ff8f2d79$export$2e2bcd8739ae039,
    regex: $431ffb642a3e026b$export$2e2bcd8739ae039,
    strongPassword: $e13bf96212666dc0$export$2e2bcd8739ae039,
    mediumPassword: $edd1e9bd3fe67bfc$export$2e2bcd8739ae039,
    oneOf: $fd160910cc7fca43$export$2e2bcd8739ae039,
    oneOfType: $fd7f2946b4a5b9f0$export$2e2bcd8739ae039
};
var $15f3e192ef8b4889$export$2e2bcd8739ae039 = (data, shapeOb)=>{
    if (!$83e75da502114ee3$export$a6cdc56e425d0d0a(shapeOb)) {
        const message = "shape property must be an Object";
        console.error(message);
        return new Error(message);
    }
    if ($83e75da502114ee3$export$a6cdc56e425d0d0a(data) && !$83e75da502114ee3$export$dd1bc94b04021eeb(data)) {
        const check = $5a95543c0f9fde5b$export$2e2bcd8739ae039($15f3e192ef8b4889$var$TYPES, data, shapeOb);
        check.validate();
        if (check.hasError()) return new Error("$field " + Object.values(check.errors).join(', $field '));
        else return true;
    }
};



const $408b6120c5d8a21f$var$TYPES = {
    type: $0dc62a8790cee7af$export$2e2bcd8739ae039,
    email: $45a2c203fb42db2c$export$2e2bcd8739ae039,
    equal: $3663b7ea1b937ee7$export$2e2bcd8739ae039,
    notEqualWith: $eade55b204e386c9$export$2e2bcd8739ae039,
    url: $18930b847e76f420$export$2e2bcd8739ae039,
    hex: $cf113bad101eed60$export$2e2bcd8739ae039,
    uppercase: $c05407ac98285c88$export$2e2bcd8739ae039,
    lowercase: $a983def8f24061df$export$2e2bcd8739ae039,
    capitalize: $b0f389b4b687e843$export$2e2bcd8739ae039,
    min: $8ad481c9cf5a4ab7$export$2e2bcd8739ae039,
    max: $9dcc3cb90128f63d$export$2e2bcd8739ae039,
    compare: $05debb3ed4f142bb$export$2e2bcd8739ae039,
    required: $58cbff7fef638a81$export$2e2bcd8739ae039,
    minWords: $1927745a68e2ae86$export$2e2bcd8739ae039,
    maxWords: $0b0cee6eb813ce3f$export$2e2bcd8739ae039,
    minNumberRange: $c8d744b461fe26f0$export$2e2bcd8739ae039,
    maxNumberRange: $1c26afe30357d381$export$2e2bcd8739ae039,
    notAllowedChars: $bfe321388da19f12$export$2e2bcd8739ae039,
    notAllowedCharacters: $598ffc6680c01d87$export$2e2bcd8739ae039,
    notAllowedSpecialChars: $693f83de18183c75$export$2e2bcd8739ae039,
    notAllowedWords: $ec06ef7ccd14f506$export$2e2bcd8739ae039,
    notAllowedNumber: $3c924d77ff8f2d79$export$2e2bcd8739ae039,
    regex: $431ffb642a3e026b$export$2e2bcd8739ae039,
    strongPassword: $e13bf96212666dc0$export$2e2bcd8739ae039,
    mediumPassword: $edd1e9bd3fe67bfc$export$2e2bcd8739ae039,
    oneOf: $fd160910cc7fca43$export$2e2bcd8739ae039,
    oneOfType: $fd7f2946b4a5b9f0$export$2e2bcd8739ae039,
    exact: $0a7e1ac82e3fa83a$export$2e2bcd8739ae039,
    shape: $15f3e192ef8b4889$export$2e2bcd8739ae039
};
const $408b6120c5d8a21f$export$dc9851424e3aa5dc = (data, schema)=>$5a95543c0f9fde5b$export$2e2bcd8739ae039($408b6120c5d8a21f$var$TYPES, data, schema)
;
var $408b6120c5d8a21f$export$2e2bcd8739ae039 = $408b6120c5d8a21f$export$dc9851424e3aa5dc;
$parcel$exportWildcard(module.exports, $83e75da502114ee3$exports);


//# sourceMappingURL=index.js.map
