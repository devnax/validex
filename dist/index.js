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
var isBool = function isBool(val) {
  return typeof val === 'boolean' ? true : false;
};
var isEmpty = function isEmpty(val) {
  if (isString(val) || isArray(val)) {
    return !val.length;
  } else if (isObject(val)) {
    return !Object.keys(val).length;
  } else if (!val) {
    return true;
  }
};
var parseType = function parseType(compare) {
  var error = null;
  var compareVal = compare;

  if (isArray(compare) && compare.length === 2 && compare[1] instanceof Error) {
    compareVal = compare[0];
    error = compare[1];
  }

  return {
    error: error,
    compareVal: compareVal
  };
};

var min = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      if (!(value.length >= compare)) {
        return new Error('$field minimum length of $compare');
      }
    }
  }
});

var max = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      if (!(value.length <= compare)) {
        return new Error('$field maximum length of $compare');
      }
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
      return new Error(message);
    }

    if (!types[compare](value)) {
      return new Error('$field must be $compare');
    }
  }
});

var isEmail = (function (value) {
  if (isString(value)) {
    if (value.length) {
      var valid = value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

      if (valid == null) {
        return new Error('$field must be an email!');
      }
    }
  }
});

var compare = (function (value, compare, root) {
  if (!isFunction(compare)) {
    console.error('compare must be a function');
    return new Error('compare must be a function');
  }

  if (value) {
    return compare(value, root);
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
      if (value.toLowerCase() !== compare.toLowerCase()) {
        return new Error('$field must be same as $compare');
      }
    }
  }
});

var isUrl = (function (value) {
  if (isString(value)) {
    if (value.length) {
      if (!value.toLowerCase().match(/ /g)) {
        var res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

        if (res == null) {
          return new Error('$field must be a valid URL');
        }
      }
    }
  }
});

var minWords = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      if (!(value.split(' ').length >= compare)) {
        return new Error('$field minimum words limit $compare');
      }
    }
  }
});

var maxWords = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      if (!(value.split(' ').length <= compare)) {
        return new Error('$field maximum words limit $compare');
      }
    }
  }
});

var isUpperCase = (function (value) {
  if (isString(value)) {
    if (value.length) {
      if (value !== value.toUpperCase()) {
        return new Error('$field must be uppercase!');
      }
    }
  }
});

var isLowerCase = (function (value) {
  if (isString(value)) {
    if (value.length) {
      if (value !== value.toLowerCase()) {
        return new Error('$field must be lowercase!');
      }
    }
  }
});

var isCapitalize = (function (value) {
  if (isString(value)) {
    if (value.length && value !== value.replace(/(?:^|\s)\S/g, function (w) {
      return w.toUpperCase();
    })) {
      return new Error('$field must be capitalize!');
    }
  }
});

var minNumberRange = (function (value, compare) {
  if (isNumber(value) || isNumber(value)) {
    if (value.toString().length) {
      if (!(parseInt(value) >= parseInt(compare))) {
        return new Error('$field minimum Range of $compare');
      }
    }
  }
});

var maxNumberRange = (function (value, compare) {
  if (isNumber(value) || isNumber(value)) {
    if (value.toString().length) {
      if (!(parseInt(value) <= parseInt(compare))) {
        return new Error('$field maximum Range of $compare');
      }
    }
  }
});

var notAllowedChars = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      var format = new RegExp('[' + compare + ']');

      if (format.test(value)) {
        return new Error('$compare these characters are not allowed in $field');
      }
    }
  }
});

var format = /^([^a-zA-Z]*)$/;
var notAllowedCharacters = (function (value) {
  if (isString(value) || isNumber(value)) {
    value = value.toString();

    if (value.length) {
      if (!format.test(value)) {
        return new Error('characters are not allowed in $field');
      }
    }
  }
});

var format$1 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var notAllowedSpecialChars = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      if (format$1.test(value)) {
        return new Error('special characters are not allowed in $field');
      }
    }
  }
});

var notAllowedWords = (function (value, compare) {
  if (isString(value)) {
    if (value.length) {
      var words = compare.replace(',', "|");
      var pattern = new RegExp(words);

      if (value.match(pattern)) {
        return new Error('$compare these words are not allowed in $field');
      }
    }
  }
});

var format$2 = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
var isHex = (function (value) {
  if (isString(value)) {
    if (value.length) {
      if (!format$2.test(value)) {
        return new Error('$field must be a hexadecimal characters');
      }
    }
  }
});

var format$3 = /^([^0-9]*)$/;
var notAllowedNumber = (function (value) {
  if (isString(value) || isNumber(value)) {
    value = value.toString();

    if (value.length) {
      if (!format$3.test(value)) {
        return new Error('number are not allowed in $field');
      }
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
      if (!format$5.test(value)) {
        return new Error('use 6 or more characters with a mix of letters, numbers & symbols in $field');
      }
    }
  }
});

var notEqualWith = (function (value, field_name, _ref) {
  var root = _ref.root;

  if (isString(value)) {
    if (value.length) {
      if (root.data.hasOwnProperty(field_name)) {
        var fieldValue = root.data[field_name];

        if (value.toLowerCase() === fieldValue.toLowerCase()) {
          return new Error("$field not be equal with $compare");
        }
      } else {
        console.error(field_name + " is not exists in data object");
      }
    }
  }
});

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var oneOfType = (function (value, compare) {
  if (!isArray(compare)) {
    var message = "property must be an array";
    console.error(message);
    return new Error(message);
  }

  if (!isEmpty(value)) {
    var perfect = false;

    for (var _iterator = _createForOfIteratorHelperLoose(compare), _step; !(_step = _iterator()).done;) {
      var t = _step.value;
      var check = isType(value, t);

      if (!(check instanceof Error)) {
        perfect = true;
        break;
      }
    }

    if (!perfect) {
      return new Error("$field must be one of type " + compare.join('|'));
    }
  }
});

var oneOf = (function (value, compare) {
  if (!isArray(compare)) {
    var message = "property must be an array";
    console.error(message);
    return new Error(message);
  }

  if (isString(value)) {
    if (value.length) {
      if (!compare.includes(value)) {
        return new Error("$field must be one of " + compare.join('|'));
      }
    }
  }
});

var exact = (function (data, exactOb) {
  if (!isObject(exactOb)) {
    var message = "exact property must be an Object";
    console.error(message);
    return new Error(message);
  }

  if (isObject(data) && !isEmpty(data)) {
    if (Object.keys(data).length != Object.keys(exactOb).length) {
      return new Error('Pass invalid properties for $field');
    }

    var keys = [];

    for (var key in data) {
      if (!exactOb.hasOwnProperty(key)) {
        keys.push(key);
      }
    }

    if (keys.length) {
      return new Error('Pass invalid properties for $field');
    }

    var check = validex(data, exactOb);
    check.validate();

    if (check.hasError()) {
      return new Error("$field " + Object.values(check.errors).join(', $field '));
    }
  }
});

var shape = (function (data, shapeOb) {
  if (!isObject(shapeOb)) {
    var message = "shape property must be an Object";
    console.error(message);
    return new Error(message);
  }

  if (isObject(data) && !isEmpty(data)) {
    var check = validex(data, shapeOb);
    check.validate();

    if (check.hasError()) {
      return new Error("$field " + Object.values(check.errors).join(', $field '));
    }
  }
});

var TYPES = {
  type: isType,
  email: isEmail,
  equal: isEqual,
  notEqualWith: notEqualWith,
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
  mediumPassword: mediumPassword,
  oneOf: oneOf,
  oneOfType: oneOfType,
  exact: exact,
  shape: shape
};
var validex = (function (data, schema) {
  var root = {
    data: isObject(data) ? data : {},
    schema: isObject(schema) ? schema : {},
    errors: {},
    callback: null,
    set: function set(name, value, _schema) {
      root.data[name] = value;
      root.schema[name] = _schema;
    },
    hasError: function hasError(name) {
      if (name === undefined) {
        return Object.keys(root.errors).length ? true : false;
      }

      if (root.errors[name]) {
        return true;
      }
    },
    getError: function getError(name) {
      if (!name) {
        return root.errors;
      }

      return root.errors[name];
    },
    removeError: function removeError(name) {
      if (root.errors[name]) {
        delete root.errors[name];

        if (isFunction(root.callback)) {
          root.callback('removeError', root);
        }
      }
    }
  };

  root.validate = function () {
    for (var fieldName in root.data) {
      if (root.schema[fieldName]) {
        var value = root.data[fieldName];
        var schem = root.schema[fieldName];

        if (isString(value)) {
          value = value.trim();
        }

        if (!isObject(schem)) {
          console.error("You passed wrong format in the schema for this " + fieldName);
          break;
        }

        for (var type in schem) {
          if (type == 'nameAlias') {
            continue;
          }

          if (TYPES.hasOwnProperty(type)) {
            if (root.hasError(fieldName)) {
              break;
            }

            var nameAlias = schem['nameAlias'] || fieldName;

            var _parseType = parseType(schem[type]),
                error = _parseType.error,
                compareVal = _parseType.compareVal;

            var isError = TYPES[type](value, compareVal, {
              root: root,
              fieldName: fieldName,
              type: type,
              nameAlias: nameAlias,
              prop: schem[type]
            });

            if (isError instanceof Error) {
              var message = '';

              if (!(error instanceof Error)) {
                message = isError.message;
              } else {
                message = error.message;
              }

              message = message.replace(/\$field/g, nameAlias);
              message = message.replace(/\$compare/g, schem[type]);
              root.errors[fieldName] = message;
            }
          } else {
            console.error("Invalide type " + type);
          }
        }
      }
    }

    if (isFunction(root.callback)) {
      root.callback('validate', root);
    }

    return root.hasError();
  };

  return root;
});

exports.default = validex;
exports.exact = exact;
exports.isArray = isArray;
exports.isBool = isBool;
exports.isCapitalize = isCapitalize;
exports.isEmail = isEmail;
exports.isEmpty = isEmpty;
exports.isEqual = isEqual;
exports.isFunction = isFunction;
exports.isHex = isHex;
exports.isInteger = isInteger;
exports.isLowerCase = isLowerCase;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
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
exports.oneOf = oneOf;
exports.oneOfType = oneOfType;
exports.parseType = parseType;
exports.regex = regex;
exports.shape = shape;
exports.strongPassword = strongPassword;
//# sourceMappingURL=index.js.map
