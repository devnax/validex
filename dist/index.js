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
  notAllowedCharters: 'charters are not allowed in $field',
  notAllowedSpecialChars: 'special charters are not allowed in $field',
  notAllowedWords: '$compare these words are not allowed in $field',
  notAllowedNumber: 'number are not allowed in $field',
  hex: '$field must be a hexadecimal charters',
  regex: 'wrong value passed in $field',
  strongPassword: 'use 8 or more characters with a mix of letters, numbers & symbols in $field',
  mediumPassword: 'use 6 or more characters with a mix of letters, numbers & symbols in $field'
};

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
      var valid = value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

      if (valid != null) {
        return true;
      }

      return false;
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

var format = /^([^a-zA-Z]*)$/;
var notAllowedCharacters = (function (value) {
  if (isString(value) || isNumber(value)) {
    value = value.toString();

    if (value.length) {
      return format.test(value);
    }
  }
});

var format$1 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var notAllowedSpecialChars = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      return !format$1.test(value);
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

var format$2 = /[0-9A-Fa-f]{6}/g;
var isHex = (function (value) {
  if (isString(value)) {
    if (value.length) {
      if (format$2.test(value)) {
        return true;
      }

      return false;
    }
  }
});

var format$3 = /^([^0-9]*)$/;
var notAllowedNumber = (function (value) {
  if (isString(value) || isNumber(value)) {
    value = value.toString();

    if (value.length) {
      return format$3.test(value);
    }
  }
});

var regex = (function (value, compare) {
  if (isString(value) || isNumber(value)) {
    value = value.toString();

    if (value.length) {
      return compare.test(value);
    }
  }
});

var format$4 = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
var strongPassword = (function (value) {
  if (isString(value)) {
    value = value.toString();

    if (value.length) {
      return format$4.test(value);
    }
  }
});

var format$5 = new RegExp('((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
var mediumPassword = (function (value) {
  if (isString(value)) {
    value = value.toString();

    if (value.length) {
      return format$5.test(value);
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
  notAllowedCharacters: notAllowedCharacters,
  notAllowedSpecialChars: notAllowedSpecialChars,
  notAllowedWords: notAllowedWords,
  notAllowedNumber: notAllowedNumber,
  regex: regex,
  strongPassword: strongPassword,
  mediumPassword: mediumPassword
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

      if (info.errors[name]) {
        return true;
      }
    },
    getError: function getError(name) {
      if (!name) {
        return info.errors;
      }

      return info.errors[name];
    },
    removeError: function removeError(name) {
      if (info.errors[name]) {
        delete info.errors[name];

        if (isFunction(info.callback)) {
          info.callback('removeError', info);
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
            if (info.hasError(fieldName)) {
              break;
            }

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
              info.errors[fieldName] = message;
            }
          }
        }
      }
    }

    if (isFunction(info.callback)) {
      info.callback('validate', info);
    }

    return info.hasError();
  };

  return info;
});

exports.default = index;
exports.isCapitalize = isCapitalize;
exports.isEmail = isEmail;
exports.isEqual = isEqual;
exports.isHex = isHex;
exports.isLowerCase = isLowerCase;
exports.isType = isType;
exports.isUpperCase = isUpperCase;
exports.isUrl = isUrl;
exports.maxNumberRange = maxNumberRange;
exports.maxWords = maxWords;
exports.mediumPassword = mediumPassword;
exports.minNumberRange = minNumberRange;
exports.minWords = minWords;
exports.notAllowedCharacters = notAllowedCharacters;
exports.notAllowedChars = notAllowedChars;
exports.notAllowedNumber = notAllowedNumber;
exports.notAllowedSpecialChars = notAllowedSpecialChars;
exports.notAllowedWords = notAllowedWords;
exports.regex = regex;
exports.strongPassword = strongPassword;
//# sourceMappingURL=index.js.map
