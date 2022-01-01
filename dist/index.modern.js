const isFunction = val => typeof val === 'function' ? true : false;
const isArray = val => typeof val === 'object' && Array.isArray(val) ? true : false;
const isObject = val => typeof val === 'object' && val !== null && !Array.isArray(val) ? true : false;
const isString = val => typeof val === 'string' ? true : false;
const isNumber = val => !isNaN(val) ? true : false;
const isInteger = val => typeof val === 'number' ? true : false;
const parseType = compare => {
  let message = null;
  let compareVal = compare;

  if (isArray(compare)) {
    compareVal = compare[0];
    message = compare[1];
  }

  return {
    message,
    compareVal
  };
};

var MESSAGES = {
  email: '$field must be an email!',
  equal: '$field must be same as $compare',
  url: '$field must be a valid URL',
  max: '$field maximum length of $compare',
  min: '$field minimum length of $compare',
  required: '$field is required!',
  type: '$field must be $compare',
  minWords: '$field minimum words limit $compare',
  maxWords: '$field maximum words limit $compare',
  minNumberRange: '$field minimum Range of $compare',
  maxNumberRange: '$field maximum Range of $compare',
  uppercase: '$field must be uppercase!',
  lowercase: '$field must be lowercase!',
  capitalize: '$field must be capitalize!',
  notAllowedChars: '$compare these charters are not allowed in $field',
  notAllowedSpecialChars: 'special charters are not allowed in $field',
  notAllowedWords: '$compare these words are not allowed in $field',
  hex: '$field must be a hexadecimal charters'
};

var min = ((value, compare) => {
  if (isString(value)) {
    if (value.length) {
      return value.length >= compare;
    }
  }
});

var max = ((value, compare) => {
  if (isString(value)) {
    if (value.length) {
      return value.length <= compare;
    }
  }
});

const types = {
  bool: val => typeof val === 'boolean',
  number: val => !isNaN(val),
  string: val => isString(val),
  array: val => isArray(val),
  object: val => isObject(val)
};
var isType = ((value, compare) => {
  if (value) {
    if (!types.hasOwnProperty(compare)) {
      message = `Invalide type given`;
      console.error(message, `Available Types are ${Object.keys(types).join(', ')}`);
      return false;
    }

    return types[compare](value);
  }
});

var isEmail = (value => {
  if (isString(value)) {
    if (value.length) {
      const valid = value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

      if (valid != null) {
        return true;
      }

      return false;
    }
  }
});

var compare = ((value, compare) => {
  if (!isFunction(compare)) {
    console.error(`compare must be a function`);
    return false;
  }

  if (value) {
    const check = compare(value);

    if (typeof check === 'boolean') {
      return check;
    }
  }
});

var required = (value => {
  if (!value) {
    return false;
  } else if (isString(value) || isArray(value)) {
    return value.length ? true : false;
  } else if (isObject(value)) {
    return Object.keys(value).length ? true : false;
  } else if (isInteger(value)) {
    return value ? true : false;
  }
});

var isEqual = ((value, compare) => {
  if (isString(value)) {
    if (value.length) {
      return value.toLowerCase() === compare.toLowerCase();
    }
  }
});

var isUrl = (value => {
  if (isString(value)) {
    if (value.length) {
      if (!value.toLowerCase().match(/ /g)) {
        var res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

        if (res !== null) {
          return true;
        }
      }

      return false;
    }
  }
});

var minWords = ((value, compare) => {
  if (isString(value)) {
    if (value.length) {
      return value.split(' ').length >= compare;
    }
  }
});

var maxWords = ((value, compare) => {
  if (isString(value)) {
    if (value.length) {
      return value.split(' ').length <= compare;
    }
  }
});

var isUpperCase = (value => {
  if (isString(value)) {
    if (value.length) {
      return value === value.toUpperCase();
    }
  }
});

var isLowerCase = (value => {
  if (isString(value)) {
    if (value.length) {
      return value === value.toLowerCase();
    }
  }
});

var isCapitalize = (value => {
  if (isString(value)) {
    if (value.length) {
      return value === value.replace(/(?:^|\s)\S/g, w => w.toUpperCase());
    }
  }
});

var minNumberRange = ((value, compare) => {
  if (isNumber(value) || isNumber(value)) {
    if (value.toString().length) {
      return parseInt(value) >= parseInt(compare);
    }
  }
});

var maxNumberRange = ((value, compare) => {
  if (isNumber(value) || isNumber(value)) {
    if (value.toString().length) {
      return parseInt(value) <= parseInt(compare);
    }
  }
});

var notAllowedChars = ((value, compare) => {
  if (isString(value)) {
    if (value.length) {
      const format = new RegExp('[' + compare + ']');
      return !format.test(value);
    }
  }
});

var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var notAllowedSpecialChars = ((value, compare) => {
  if (isString(value)) {
    if (value.length) {
      return !format.test(value);
    }
  }
});

var notAllowedWords = ((value, compare) => {
  if (isString(value)) {
    if (value.length) {
      const words = compare.replace(',', "|");
      const pattern = new RegExp(words);
      return !value.match(pattern);
    }
  }
});

var format$1 = /[0-9A-Fa-f]{6}/g;
var isHex = (value => {
  if (isString(value)) {
    if (value.length) {
      if (format$1.test(value)) {
        return true;
      }

      return false;
    }
  }
});

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
  notAllowedWords
};
var index = ((data, schema) => {
  const info = {
    data: isObject(data) ? data : {},
    schema: isObject(schema) ? schema : {},
    errors: {},
    callback: null,
    set: (name, value, _schema) => {
      info.data[name] = value;
      info.schema[name] = _schema;
    },
    hasError: name => {
      if (name === undefined) {
        return Object.keys(info.errors).length ? true : false;
      }

      if (info.errors.hasOwnProperty(name)) {
        return Object.keys(info.errors[name]).length ? true : false;
      }
    },
    errorMessage: name => {
      if (isString(name)) {
        const errors = info.getErrors(name);

        if (errors) {
          return errors[Object.keys(errors)[0]];
        }
      } else {
        for (let _name in info.data) {
          if (info.hasError(_name)) {
            return info.errorMessage(_name);
          }
        }
      }
    },
    getErrors: name => {
      if (!name) {
        return info.errors;
      }

      if (info.errors.hasOwnProperty(name)) {
        return Object.keys(info.errors[name]) ? info.errors[name] : false;
      }
    },
    removeError: (name, type) => {
      const errors = info.getErrors(name);

      if (errors) {
        if (errors.hasOwnProperty(type)) {
          delete info.errors[name][type];

          if (isFunction(info.callback)) {
            info.callback('removeError', info);
          }
        }
      }
    },
    removeErrors: name => {
      if (info.hasError(name)) {
        delete info.errors[name];

        if (isFunction(info.callback)) {
          info.callback('removeErrors', info);
        }
      }
    }
  };

  info.validate = () => {
    for (let fieldName in info.data) {
      if (info.schema[fieldName]) {
        let value = info.data[fieldName];
        const schem = info.schema[fieldName];

        if (isString(value)) {
          value = value.trim();
        }

        if (!isObject(schem)) {
          console.error(new Error(`You passed wrong format in the schema for this ${fieldName}`));
          break;
        }

        for (let type in schem) {
          if (type == 'nameAlias') {
            continue;
          }

          if (TYPES.hasOwnProperty(type)) {
            let {
              message,
              compareVal
            } = parseType(schem[type]);
            const compared = TYPES[type](value, compareVal);

            if (compared === false) {
              const field = schem['nameAlias'] || fieldName;

              if (!message && MESSAGES.hasOwnProperty(type)) {
                message = MESSAGES[type];
              }

              message = message.replace('$field', field);
              message = message.replace('$compare', schem[type]);

              if (!isArray(info.errors[fieldName])) {
                info.errors[fieldName] = {};
              }

              info.errors[fieldName][type] = message;
            } else {
              info.removeError(fieldName, type);
            }
          }
        }
      }
    }

    if (isFunction(info.callback)) {
      info.callback('validate', info);
    }
  };

  return info;
});

export default index;
export { isCapitalize, isEmail, isEqual, isHex, isLowerCase, isType, isUpperCase, isUrl, maxNumberRange, maxWords, minNumberRange, minWords, notAllowedChars, notAllowedSpecialChars, notAllowedWords };
//# sourceMappingURL=index.modern.js.map
