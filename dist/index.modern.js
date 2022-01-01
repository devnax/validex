var isFunction = function isFunction(val) {
  return typeof val === 'function' ? true : false;
};
var isArray = function isArray(val) {
  return typeof val === 'object' && Array.isArray(val) ? true : false;
};
var isObject = function isObject(val) {
  return typeof val === 'object' && val !== null && !Array.isArray(val) ? true : false;
};
var isString = function isString(val) {
  return typeof val === 'string' ? true : false;
};
var isNumber = function isNumber(val) {
  return !isNaN(val) ? true : false;
};
var isInteger = function isInteger(val) {
  return typeof val === 'number' ? true : false;
};
var parseType = function parseType(compare) {
  var message = null;
  var compareVal = compare;

  if (isArray(compare)) {
    compareVal = compare[0];
    message = compare[1];
  }

  return {
    message: message,
    compareVal: compareVal
  };
};

var _min$email$equal$url$;

var MESSAGES = (_min$email$equal$url$ = {
  min: '$field minimum length $compare',
  email: '$field must be an email!',
  equal: '$field is not equal with $compare',
  url: '$field must be a valid URL',
  max: '$field maximum length of $compare'
}, _min$email$equal$url$["min"] = '$field minimum length of $compare', _min$email$equal$url$.required = '$field is required!', _min$email$equal$url$.type = '$field must be a $compare', _min$email$equal$url$.minWords = '$field minimum words limit $compare', _min$email$equal$url$.maxWords = '$field maximum words limit $compare', _min$email$equal$url$.minNumberRange = '$field minimum Amount of $compare', _min$email$equal$url$.maxNumberRange = '$field maximum Amount of $compare', _min$email$equal$url$.uppercase = '$field must be uppercase!', _min$email$equal$url$.lowercase = '$field must be lowercase!', _min$email$equal$url$.capitalize = '$field must be capitalize!', _min$email$equal$url$.notAllowedChars = '$compare these charters are not allowed for $field field', _min$email$equal$url$.notAllowedSpecialChars = 'special charters are not allowed for $field field', _min$email$equal$url$.notAllowedWords = '$compare these words are not allowed for $field field', _min$email$equal$url$.hex = '$field must be a hexadecimal charters', _min$email$equal$url$);

var min = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      return value.length >= compare;
    }
  }
});

var max = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      return value.length <= compare;
    }
  }
});

var types = {
  bool: function bool(val) {
    return typeof val === 'boolean';
  },
  number: function number(val) {
    return !isNaN(val);
  },
  string: function string(val) {
    return isString(val);
  },
  array: function array(val) {
    return isArray(val);
  },
  object: function object(val) {
    return isObject(val);
  }
};
var isType = (function (value, compare) {
  if (value) {
    if (!types.hasOwnProperty(compare)) {
      message = "Invalide type given";
      console.error(message, "Available Types are " + Object.keys(types).join(', '));
      return false;
    }

    return types[compare](value);
  }
});

var isEmail = (function (value) {
  if (isString(value)) {
    if (value.length) {
      return value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
  }
});

var compare = (function (value, compare) {
  if (!isFunction(compare)) {
    console.error("compare must be a function");
    return false;
  }

  if (value) {
    var check = compare(value);

    if (typeof check === 'boolean') {
      return check;
    }
  }
});

var required = (function (value) {
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

var isEqual = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      return value.toLowerCase() === compare.toLowerCase();
    }
  }
});

var isUrl = (function (value) {
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

var minWords = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      return value.split(' ').length >= compare;
    }
  }
});

var maxWords = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      return value.split(' ').length <= compare;
    }
  }
});

var isUpperCase = (function (value) {
  if (isString(value)) {
    if (value.length) {
      return value === value.toUpperCase();
    }
  }
});

var isLowerCase = (function (value) {
  if (isString(value)) {
    if (value.length) {
      return value === value.toLowerCase();
    }
  }
});

var isCapitalize = (function (value) {
  if (isString(value)) {
    if (value.length) {
      return value === value.replace(/(?:^|\s)\S/g, function (w) {
        return w.toUpperCase();
      });
    }
  }
});

var minNumberRange = (function (value, compare) {
  if (isNumber(value) || isNumber(value)) {
    if (value.toString().length) {
      return parseInt(value) >= parseInt(compare);
    }
  }
});

var maxNumberRange = (function (value, compare) {
  if (isNumber(value) || isNumber(value)) {
    if (value.toString().length) {
      return parseInt(value) <= parseInt(compare);
    }
  }
});

var notAllowedChars = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      var format = new RegExp('[' + compare + ']');
      return !format.test(value);
    }
  }
});

var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var notAllowedSpecialChars = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      return !format.test(value);
    }
  }
});

var notAllowedWords = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      var words = compare.replace(',', "|");
      var pattern = new RegExp(words);
      return !value.match(pattern);
    }
  }
});

var format$1 = /[0-9A-Fa-f]{6}/g;
var isHex = (function (value) {
  if (isString(value)) {
    if (value.length) {
      if (format$1.test(value)) {
        return true;
      }

      return false;
    }
  }
});

var TYPES = {
  type: isType,
  email: isEmail,
  equal: isEqual,
  url: isUrl,
  hex: isHex,
  uppercase: isUpperCase,
  lowercase: isLowerCase,
  capitalize: isCapitalize,
  min: min,
  max: max,
  compare: compare,
  required: required,
  minWords: minWords,
  maxWords: maxWords,
  minNumberRange: minNumberRange,
  maxNumberRange: maxNumberRange,
  notAllowedChars: notAllowedChars,
  notAllowedSpecialChars: notAllowedSpecialChars,
  notAllowedWords: notAllowedWords
};
var index = (function (data, schema) {
  var info = {
    data: isObject(data) ? data : {},
    schema: isObject(schema) ? schema : {},
    errors: {},
    callback: null,
    set: function set(name, value, _schema) {
      info.data[name] = value;
      info.schema[name] = _schema;
    },
    hasError: function hasError(name) {
      if (name === undefined) {
        return Object.keys(info.errors).length ? true : false;
      }

      if (info.errors.hasOwnProperty(name)) {
        return Object.keys(info.errors[name]).length ? true : false;
      }
    },
    errorMessage: function errorMessage(name) {
      if (isString(name)) {
        var errors = info.getErrors(name);

        if (errors) {
          return errors[Object.keys(errors)[0]];
        }
      } else {
        for (var _name in info.data) {
          if (info.hasError(_name)) {
            return info.errorMessage(_name);
          }
        }
      }
    },
    getErrors: function getErrors(name) {
      if (!name) {
        return info.errors;
      }

      if (info.errors.hasOwnProperty(name)) {
        return Object.keys(info.errors[name]) ? info.errors[name] : false;
      }
    },
    removeError: function removeError(name, type) {
      var errors = info.getErrors(name);

      if (errors) {
        if (errors.hasOwnProperty(type)) {
          delete info.errors[name][type];

          if (isFunction(info.callback)) {
            info.callback('removeError', info);
          }
        }
      }
    },
    removeErrors: function removeErrors(name) {
      if (info.hasError(name)) {
        delete info.errors[name];

        if (isFunction(info.callback)) {
          info.callback('removeErrors', info);
        }
      }
    }
  };

  info.validate = function () {
    for (var fieldName in info.data) {
      if (info.schema[fieldName]) {
        var value = info.data[fieldName];
        var schem = info.schema[fieldName];

        if (isString(value)) {
          value = value.trim();
        }

        if (!isObject(schem)) {
          console.error(new Error("You passed wrong format in the schema for this " + fieldName));
          break;
        }

        for (var type in schem) {
          if (type == 'nameAlias') {
            continue;
          }

          if (TYPES.hasOwnProperty(type)) {
            var _parseType = parseType(schem[type]),
                message = _parseType.message,
                compareVal = _parseType.compareVal;

            var compared = TYPES[type](value, compareVal);

            if (compared === false) {
              var field = schem['nameAlias'] || fieldName;

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
