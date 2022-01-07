function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $fb9ab145a8ccf669$exports = {};

$parcel$export($fb9ab145a8ccf669$exports, "isFunction", () => $fb9ab145a8ccf669$export$f6e2535fb5126e54);
$parcel$export($fb9ab145a8ccf669$exports, "isArray", () => $fb9ab145a8ccf669$export$43bee75e5e14138e);
$parcel$export($fb9ab145a8ccf669$exports, "isObject", () => $fb9ab145a8ccf669$export$a6cdc56e425d0d0a);
$parcel$export($fb9ab145a8ccf669$exports, "isString", () => $fb9ab145a8ccf669$export$844ec244b1367d54);
$parcel$export($fb9ab145a8ccf669$exports, "isNumber", () => $fb9ab145a8ccf669$export$7e4aa119212bc614);
$parcel$export($fb9ab145a8ccf669$exports, "isInteger", () => $fb9ab145a8ccf669$export$a287f47fed4544b8);
$parcel$export($fb9ab145a8ccf669$exports, "isBool", () => $fb9ab145a8ccf669$export$28ac561dc09c20ca);
$parcel$export($fb9ab145a8ccf669$exports, "isEmpty", () => $fb9ab145a8ccf669$export$dd1bc94b04021eeb);
$parcel$export($fb9ab145a8ccf669$exports, "parseType", () => $fb9ab145a8ccf669$export$28b8f402ccc88182);
const $fb9ab145a8ccf669$export$f6e2535fb5126e54 = (val)=>typeof val === 'function' ? true : false
;
const $fb9ab145a8ccf669$export$43bee75e5e14138e = (val)=>typeof val === 'object' && Array.isArray(val) ? true : false
;
const $fb9ab145a8ccf669$export$a6cdc56e425d0d0a = (val)=>typeof val === 'object' && val !== null && !Array.isArray(val) ? true : false
;
const $fb9ab145a8ccf669$export$844ec244b1367d54 = (val)=>typeof val === 'string' ? true : false
;
const $fb9ab145a8ccf669$export$7e4aa119212bc614 = (val)=>!isNaN(val) ? true : false
;
const $fb9ab145a8ccf669$export$a287f47fed4544b8 = (val)=>typeof val === 'number' ? true : false
;
const $fb9ab145a8ccf669$export$28ac561dc09c20ca = (val)=>typeof val === 'boolean' ? true : false
;
const $fb9ab145a8ccf669$export$dd1bc94b04021eeb = (val)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(val) || $fb9ab145a8ccf669$export$43bee75e5e14138e(val)) return !val.length;
    else if ($fb9ab145a8ccf669$export$a6cdc56e425d0d0a(val)) return !Object.keys(val).length;
    else if (!val) return true;
};
const $fb9ab145a8ccf669$export$28b8f402ccc88182 = (compare)=>{
    let error = null;
    let compareVal = compare;
    if ($fb9ab145a8ccf669$export$43bee75e5e14138e(compare) && compare.length === 2 && compare[1] instanceof Error) {
        compareVal = compare[0];
        error = compare[1];
    }
    return {
        error: error,
        compareVal: compareVal
    };
};


var $96a9202ad74d1574$export$2e2bcd8739ae039 = (TYPES, data, schema)=>{
    const root = {
        data: $fb9ab145a8ccf669$export$a6cdc56e425d0d0a(data) ? data : {
        },
        schema: $fb9ab145a8ccf669$export$a6cdc56e425d0d0a(schema) ? schema : {
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
                if ($fb9ab145a8ccf669$export$f6e2535fb5126e54(root.callback)) root.callback('removeError', root);
            }
        }
    };
    root.validate = ()=>{
        // comparing
        for(let fieldName in root.data)if (root.schema[fieldName]) {
            let value = root.data[fieldName];
            const schem = root.schema[fieldName];
            if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) value = value.trim();
            if (!$fb9ab145a8ccf669$export$a6cdc56e425d0d0a(schem)) {
                console.error(`You passed wrong format in the schema for this ${fieldName}`);
                break;
            }
            for(let type in schem){
                // avoid some fields
                if (type == 'nameAlias') continue;
                if (TYPES.hasOwnProperty(type)) {
                    if (root.hasError(fieldName)) break;
                    const nameAlias = schem['nameAlias'] || fieldName;
                    let { error: error , compareVal: compareVal  } = $fb9ab145a8ccf669$export$28b8f402ccc88182(schem[type]);
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
        if ($fb9ab145a8ccf669$export$f6e2535fb5126e54(root.callback)) root.callback('validate', root);
        return !root.hasError();
    };
    return root;
};



var $f87c7917a49f6d4f$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.length >= compare)) {
                if (root) return new Error('$field minimum length of $compare');
                return false;
            } else return true;
        }
    }
};



var $a003b563670259c3$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.length <= compare)) {
                if (root) return new Error('$field maximum length of $compare');
                return false;
            } else return true;
        }
    }
};



const $d40fe8818bab80b4$var$types = {
    bool: (val)=>typeof val === 'boolean'
    ,
    number: (val)=>!isNaN(val)
    ,
    string: (val)=>$fb9ab145a8ccf669$export$844ec244b1367d54(val)
    ,
    array: (val)=>$fb9ab145a8ccf669$export$43bee75e5e14138e(val)
    ,
    object: (val)=>$fb9ab145a8ccf669$export$a6cdc56e425d0d0a(val)
};
var $d40fe8818bab80b4$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if (value) {
        if (!$d40fe8818bab80b4$var$types.hasOwnProperty(compare)) {
            message = `Invalide type given`;
            console.error(message, `Available Types are ${Object.keys($d40fe8818bab80b4$var$types).join(', ')}`);
            return new Error(message);
        }
        if (!$d40fe8818bab80b4$var$types[compare](value)) {
            if (root) return new Error('$field must be $compare');
            return false;
        } else return true;
    }
};



var $ee722d5ad13edb67$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            const valid = value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (valid == null) {
                if (root) return new Error('$field must be an email!');
                return false;
            } else return true;
        }
    }
};



var $9e420da9abb32edf$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if (!$fb9ab145a8ccf669$export$f6e2535fb5126e54(compare)) {
        console.error('compare must be a function');
        return new Error('compare must be a function');
    }
    if (value) return compare(value, root);
};



var $ca40ed7ee58b40a9$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$dd1bc94b04021eeb(value)) {
        if (root) return new Error("$field required!");
        return false;
    } else return true;
};



var $cc8c5c9fff9c7024$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (value.toLowerCase() !== compare.toLowerCase()) {
                if (root) return new Error('$field must be same as $compare');
                return false;
            } else return true;
        }
    }
};



var $f31b7bb333f8d972$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!value.toLowerCase().match(/ /g)) {
                var res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
                if (res == null) {
                    if (root) return new Error('$field must be a valid URL');
                    return false;
                } else return true;
            }
        }
    }
};



var $a76502ee8434104a$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.split(' ').length >= compare)) {
                if (root) return new Error('$field minimum words limit $compare');
                return false;
            } else return true;
        }
    }
};



var $0449e90f88935030$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!(value.split(' ').length <= compare)) {
                if (root) return new Error('$field maximum words limit $compare');
                return false;
            } else return true;
        }
    }
};



var $b0e0b22213017a83$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (value !== value.toUpperCase()) {
                if (root) return new Error('$field must be uppercase!');
                return false;
            } else return true;
        }
    }
};



var $608c0957fecf1924$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (value !== value.toLowerCase()) {
                if (root) return new Error('$field must be lowercase!');
                return false;
            } else return true;
        }
    }
};



var $c17f96aedde2e5a1$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length && value !== value.replace(/(?:^|\s)\S/g, (w)=>w.toUpperCase()
        )) {
            if (root) return new Error('$field must be capitalize!');
            return false;
        } else return true;
    }
};



var $7ed7f9ab5b38a73b$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$7e4aa119212bc614(value) || $fb9ab145a8ccf669$export$7e4aa119212bc614(value)) {
        if (value.toString().length) {
            if (!(parseInt(value) >= parseInt(compare))) {
                if (root) return new Error('$field minimum Range of $compare');
                return false;
            } else return true;
        }
    }
};



var $609c50c64edd6954$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$7e4aa119212bc614(value) || $fb9ab145a8ccf669$export$7e4aa119212bc614(value)) {
        if (value.toString().length) {
            if (!(parseInt(value) <= parseInt(compare))) {
                if (root) return new Error('$field maximum Range of $compare');
                return false;
            } else return true;
        }
    }
};



var $eb15f4cff8b8db8f$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            const format = new RegExp('[' + compare + ']');
            if (format.test(value)) {
                if (root) return new Error('$compare these characters are not allowed in $field');
                return false;
            } else return true;
        }
    }
};



var $286056663798c8e7$var$format = /^([^a-zA-Z]*)$/;
var $286056663798c8e7$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value) || $fb9ab145a8ccf669$export$7e4aa119212bc614(value)) {
        value = value.toString();
        if (value.length) {
            if (!$286056663798c8e7$var$format.test(value)) {
                if (root) return new Error('characters are not allowed in $field');
                return false;
            } else return true;
        }
    }
};



var $a6435590f44aece4$var$format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var $a6435590f44aece4$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if ($a6435590f44aece4$var$format.test(value)) {
                if (root) return new Error('special characters are not allowed in $field');
                return false;
            } else return true;
        }
    }
};



var $949243f55673e15b$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            const words = compare.replace(',', "|");
            const pattern = new RegExp(words);
            if (value.match(pattern)) {
                if (root) return new Error('$compare these words are not allowed in $field');
                return false;
            } else return true;
        }
    }
};



var $f3f10de667a8d2b4$var$format = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
var $f3f10de667a8d2b4$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!$f3f10de667a8d2b4$var$format.test(value)) {
                if (root) return new Error('$field must be a hexadecimal characters');
                return false;
            } else return true;
        }
    }
};



var $106513c6fd810d78$var$format = /^([^0-9]*)$/;
var $106513c6fd810d78$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value) || $fb9ab145a8ccf669$export$7e4aa119212bc614(value)) {
        value = value.toString();
        if (value.length) {
            if (!$106513c6fd810d78$var$format.test(value)) {
                if (root) return new Error('number are not allowed in $field');
                return false;
            } else return true;
        }
    }
};



var $b6e370eb4a1932cf$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value) || $fb9ab145a8ccf669$export$7e4aa119212bc614(value)) {
        value = value.toString();
        if (value.length) {
            if (!compare.test(value)) {
                if (root) return new Error("Invalid value");
                return false;
            } else return true;
        }
    }
};



let $c660be645a3c808f$var$format = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
var $c660be645a3c808f$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        value = value.toString();
        if (value.length) {
            if (!$c660be645a3c808f$var$format.test(value)) {
                if (root) return new Error("Use $field 8 or more characters with a mix of letters, numbers & symbols.");
                return false;
            } else return true;
        }
    }
};



let $95e92dd66272db82$var$format = new RegExp('((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
var $95e92dd66272db82$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        value = value.toString();
        if (value.length) {
            if (!$95e92dd66272db82$var$format.test(value)) {
                if (root) return new Error('use 6 or more characters with a mix of letters, numbers & symbols in $field');
                return false;
            } else return true;
        }
    }
};



var $8dba7b5f48ac81a8$export$2e2bcd8739ae039 = (value, field_name, { root: root  })=>{
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (root.data.hasOwnProperty(field_name)) {
                const fieldValue = root.data[field_name];
                if (value.toLowerCase() === fieldValue.toLowerCase()) return new Error("$field not be equal with $compare");
            } else console.error(`${field_name} is not exists in data object`);
        }
    }
};




var $66d504b5e527ded3$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if (!$fb9ab145a8ccf669$export$43bee75e5e14138e(compare)) {
        const message = "property must be an array";
        console.error(message);
        return new Error(message);
    }
    if (!$fb9ab145a8ccf669$export$dd1bc94b04021eeb(value)) {
        let perfect = false;
        for (let t of compare){
            const check = $d40fe8818bab80b4$export$2e2bcd8739ae039(value, t);
            if (!(check instanceof Error)) {
                perfect = true;
                break;
            }
        }
        if (!perfect) {
            if (root) return new Error("$field must be one of type " + compare.join('|'));
            return false;
        } else return true;
    }
};



var $0a25c3f360e017a5$export$2e2bcd8739ae039 = (value, compare, root)=>{
    if (!$fb9ab145a8ccf669$export$43bee75e5e14138e(compare)) {
        const message = "property must be an array";
        console.error(message);
        return new Error(message);
    }
    if ($fb9ab145a8ccf669$export$844ec244b1367d54(value)) {
        if (value.length) {
            if (!compare.includes(value)) {
                if (root) return new Error("$field must be one of " + compare.join('|'));
                return false;
            } else return true;
        }
    }
};































const $5fe96ccd9f239608$var$TYPES = {
    type: $d40fe8818bab80b4$export$2e2bcd8739ae039,
    email: $ee722d5ad13edb67$export$2e2bcd8739ae039,
    equal: $cc8c5c9fff9c7024$export$2e2bcd8739ae039,
    notEqualWith: $8dba7b5f48ac81a8$export$2e2bcd8739ae039,
    url: $f31b7bb333f8d972$export$2e2bcd8739ae039,
    hex: $f3f10de667a8d2b4$export$2e2bcd8739ae039,
    uppercase: $b0e0b22213017a83$export$2e2bcd8739ae039,
    lowercase: $608c0957fecf1924$export$2e2bcd8739ae039,
    capitalize: $c17f96aedde2e5a1$export$2e2bcd8739ae039,
    min: $f87c7917a49f6d4f$export$2e2bcd8739ae039,
    max: $a003b563670259c3$export$2e2bcd8739ae039,
    compare: $9e420da9abb32edf$export$2e2bcd8739ae039,
    required: $ca40ed7ee58b40a9$export$2e2bcd8739ae039,
    minWords: $a76502ee8434104a$export$2e2bcd8739ae039,
    maxWords: $0449e90f88935030$export$2e2bcd8739ae039,
    minNumberRange: $7ed7f9ab5b38a73b$export$2e2bcd8739ae039,
    maxNumberRange: $609c50c64edd6954$export$2e2bcd8739ae039,
    notAllowedChars: $eb15f4cff8b8db8f$export$2e2bcd8739ae039,
    notAllowedCharacters: $286056663798c8e7$export$2e2bcd8739ae039,
    notAllowedSpecialChars: $a6435590f44aece4$export$2e2bcd8739ae039,
    notAllowedWords: $949243f55673e15b$export$2e2bcd8739ae039,
    notAllowedNumber: $106513c6fd810d78$export$2e2bcd8739ae039,
    regex: $b6e370eb4a1932cf$export$2e2bcd8739ae039,
    strongPassword: $c660be645a3c808f$export$2e2bcd8739ae039,
    mediumPassword: $95e92dd66272db82$export$2e2bcd8739ae039,
    oneOf: $0a25c3f360e017a5$export$2e2bcd8739ae039,
    oneOfType: $66d504b5e527ded3$export$2e2bcd8739ae039
};
var $5fe96ccd9f239608$export$2e2bcd8739ae039 = (data, exactOb, root)=>{
    if (!$fb9ab145a8ccf669$export$a6cdc56e425d0d0a(exactOb)) {
        const message = "exact property must be an Object";
        console.error(message);
        return new Error(message);
    }
    if ($fb9ab145a8ccf669$export$a6cdc56e425d0d0a(data) && !$fb9ab145a8ccf669$export$dd1bc94b04021eeb(data)) {
        if (Object.keys(data).length != Object.keys(exactOb).length) return new Error('Pass invalid properties for $field');
        let keys = [];
        for(let key in data)if (!exactOb.hasOwnProperty(key)) keys.push(key);
        if (keys.length) return new Error('Pass invalid properties for $field');
        const check = $96a9202ad74d1574$export$2e2bcd8739ae039($5fe96ccd9f239608$var$TYPES, data, exactOb);
        check.validate();
        if (check.hasError()) {
            if (root) return new Error("$field " + Object.values(check.errors).join(', $field '));
            return false;
        } else return true;
    }
};































const $ad003b1d8f2f30cb$var$TYPES = {
    type: $d40fe8818bab80b4$export$2e2bcd8739ae039,
    email: $ee722d5ad13edb67$export$2e2bcd8739ae039,
    equal: $cc8c5c9fff9c7024$export$2e2bcd8739ae039,
    notEqualWith: $8dba7b5f48ac81a8$export$2e2bcd8739ae039,
    url: $f31b7bb333f8d972$export$2e2bcd8739ae039,
    hex: $f3f10de667a8d2b4$export$2e2bcd8739ae039,
    uppercase: $b0e0b22213017a83$export$2e2bcd8739ae039,
    lowercase: $608c0957fecf1924$export$2e2bcd8739ae039,
    capitalize: $c17f96aedde2e5a1$export$2e2bcd8739ae039,
    min: $f87c7917a49f6d4f$export$2e2bcd8739ae039,
    max: $a003b563670259c3$export$2e2bcd8739ae039,
    compare: $9e420da9abb32edf$export$2e2bcd8739ae039,
    required: $ca40ed7ee58b40a9$export$2e2bcd8739ae039,
    minWords: $a76502ee8434104a$export$2e2bcd8739ae039,
    maxWords: $0449e90f88935030$export$2e2bcd8739ae039,
    minNumberRange: $7ed7f9ab5b38a73b$export$2e2bcd8739ae039,
    maxNumberRange: $609c50c64edd6954$export$2e2bcd8739ae039,
    notAllowedChars: $eb15f4cff8b8db8f$export$2e2bcd8739ae039,
    notAllowedCharacters: $286056663798c8e7$export$2e2bcd8739ae039,
    notAllowedSpecialChars: $a6435590f44aece4$export$2e2bcd8739ae039,
    notAllowedWords: $949243f55673e15b$export$2e2bcd8739ae039,
    notAllowedNumber: $106513c6fd810d78$export$2e2bcd8739ae039,
    regex: $b6e370eb4a1932cf$export$2e2bcd8739ae039,
    strongPassword: $c660be645a3c808f$export$2e2bcd8739ae039,
    mediumPassword: $95e92dd66272db82$export$2e2bcd8739ae039,
    oneOf: $0a25c3f360e017a5$export$2e2bcd8739ae039,
    oneOfType: $66d504b5e527ded3$export$2e2bcd8739ae039
};
var $ad003b1d8f2f30cb$export$2e2bcd8739ae039 = (data, shapeOb, root)=>{
    if (!$fb9ab145a8ccf669$export$a6cdc56e425d0d0a(shapeOb)) {
        const message = "shape property must be an Object";
        console.error(message);
        return new Error(message);
    }
    if ($fb9ab145a8ccf669$export$a6cdc56e425d0d0a(data) && !$fb9ab145a8ccf669$export$dd1bc94b04021eeb(data)) {
        const check = $96a9202ad74d1574$export$2e2bcd8739ae039($ad003b1d8f2f30cb$var$TYPES, data, shapeOb);
        check.validate();
        if (check.hasError()) {
            if (root) return new Error("$field " + Object.values(check.errors).join(', $field '));
            return false;
        } else return true;
    }
};



const $42ade68e3adfd77f$var$TYPES = {
    type: $d40fe8818bab80b4$export$2e2bcd8739ae039,
    email: $ee722d5ad13edb67$export$2e2bcd8739ae039,
    equal: $cc8c5c9fff9c7024$export$2e2bcd8739ae039,
    notEqualWith: $8dba7b5f48ac81a8$export$2e2bcd8739ae039,
    url: $f31b7bb333f8d972$export$2e2bcd8739ae039,
    hex: $f3f10de667a8d2b4$export$2e2bcd8739ae039,
    uppercase: $b0e0b22213017a83$export$2e2bcd8739ae039,
    lowercase: $608c0957fecf1924$export$2e2bcd8739ae039,
    capitalize: $c17f96aedde2e5a1$export$2e2bcd8739ae039,
    min: $f87c7917a49f6d4f$export$2e2bcd8739ae039,
    max: $a003b563670259c3$export$2e2bcd8739ae039,
    compare: $9e420da9abb32edf$export$2e2bcd8739ae039,
    required: $ca40ed7ee58b40a9$export$2e2bcd8739ae039,
    minWords: $a76502ee8434104a$export$2e2bcd8739ae039,
    maxWords: $0449e90f88935030$export$2e2bcd8739ae039,
    minNumberRange: $7ed7f9ab5b38a73b$export$2e2bcd8739ae039,
    maxNumberRange: $609c50c64edd6954$export$2e2bcd8739ae039,
    notAllowedChars: $eb15f4cff8b8db8f$export$2e2bcd8739ae039,
    notAllowedCharacters: $286056663798c8e7$export$2e2bcd8739ae039,
    notAllowedSpecialChars: $a6435590f44aece4$export$2e2bcd8739ae039,
    notAllowedWords: $949243f55673e15b$export$2e2bcd8739ae039,
    notAllowedNumber: $106513c6fd810d78$export$2e2bcd8739ae039,
    regex: $b6e370eb4a1932cf$export$2e2bcd8739ae039,
    strongPassword: $c660be645a3c808f$export$2e2bcd8739ae039,
    mediumPassword: $95e92dd66272db82$export$2e2bcd8739ae039,
    oneOf: $0a25c3f360e017a5$export$2e2bcd8739ae039,
    oneOfType: $66d504b5e527ded3$export$2e2bcd8739ae039,
    exact: $5fe96ccd9f239608$export$2e2bcd8739ae039,
    shape: $ad003b1d8f2f30cb$export$2e2bcd8739ae039
};
const $42ade68e3adfd77f$export$dc9851424e3aa5dc = (data, schema)=>$96a9202ad74d1574$export$2e2bcd8739ae039($42ade68e3adfd77f$var$TYPES, data, schema)
;
var $42ade68e3adfd77f$export$2e2bcd8739ae039 = $42ade68e3adfd77f$export$dc9851424e3aa5dc;


export {$42ade68e3adfd77f$export$dc9851424e3aa5dc as validex, $42ade68e3adfd77f$export$2e2bcd8739ae039 as default, $d40fe8818bab80b4$export$2e2bcd8739ae039 as isType, $ee722d5ad13edb67$export$2e2bcd8739ae039 as isEmail, $cc8c5c9fff9c7024$export$2e2bcd8739ae039 as isEqual, $f31b7bb333f8d972$export$2e2bcd8739ae039 as isUrl, $f3f10de667a8d2b4$export$2e2bcd8739ae039 as isHex, $b0e0b22213017a83$export$2e2bcd8739ae039 as isUpperCase, $608c0957fecf1924$export$2e2bcd8739ae039 as isLowerCase, $c17f96aedde2e5a1$export$2e2bcd8739ae039 as isCapitalize, $a76502ee8434104a$export$2e2bcd8739ae039 as minWords, $0449e90f88935030$export$2e2bcd8739ae039 as maxWords, $7ed7f9ab5b38a73b$export$2e2bcd8739ae039 as minNumberRange, $609c50c64edd6954$export$2e2bcd8739ae039 as maxNumberRange, $eb15f4cff8b8db8f$export$2e2bcd8739ae039 as notAllowedChars, $286056663798c8e7$export$2e2bcd8739ae039 as notAllowedCharacters, $a6435590f44aece4$export$2e2bcd8739ae039 as notAllowedSpecialChars, $949243f55673e15b$export$2e2bcd8739ae039 as notAllowedWords, $106513c6fd810d78$export$2e2bcd8739ae039 as notAllowedNumber, $b6e370eb4a1932cf$export$2e2bcd8739ae039 as regex, $c660be645a3c808f$export$2e2bcd8739ae039 as strongPassword, $95e92dd66272db82$export$2e2bcd8739ae039 as mediumPassword, $0a25c3f360e017a5$export$2e2bcd8739ae039 as oneOf, $66d504b5e527ded3$export$2e2bcd8739ae039 as oneOfType, $5fe96ccd9f239608$export$2e2bcd8739ae039 as exact, $ad003b1d8f2f30cb$export$2e2bcd8739ae039 as shape, $fb9ab145a8ccf669$export$f6e2535fb5126e54 as isFunction, $fb9ab145a8ccf669$export$43bee75e5e14138e as isArray, $fb9ab145a8ccf669$export$a6cdc56e425d0d0a as isObject, $fb9ab145a8ccf669$export$844ec244b1367d54 as isString, $fb9ab145a8ccf669$export$7e4aa119212bc614 as isNumber, $fb9ab145a8ccf669$export$a287f47fed4544b8 as isInteger, $fb9ab145a8ccf669$export$28ac561dc09c20ca as isBool, $fb9ab145a8ccf669$export$dd1bc94b04021eeb as isEmpty, $fb9ab145a8ccf669$export$28b8f402ccc88182 as parseType};
//# sourceMappingURL=index.modern.js.map
