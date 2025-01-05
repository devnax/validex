class Factory {
   error_message: string = ''
   error_type: string = ''
   value: any
   field: string = "";
   private setError(type: string, msg: string) {
      this.error_message = msg
      this.error_type = type
   }

   type(t: string, msg?: string) {
      if (this.error_message) return this
      if (typeof this.value !== t) {
         this.error_message = msg || `passing type is invalid ${this.field}`
         this.error_type = 'type'
      }
      return this
   }
   required(msg?: string) {
      if (this.error_message) return this
      if (!this.value) {
         this.setError('required', msg || `field is required ${this.field}`)
      }
      return this
   }

   capitalized(msg?: string) {
      this.type('string')
      if (this.error_message) return this
      if (!this.value.match(/^[A-Z]/)) {
         this.setError('capitalized', msg || `field is not capitalized ${this.field}`)
      }
      return this
   }

   date(msg?: string) {
      if (this.error_message) return this
      if (!this.value.match(/^\d{4}-\d{2}-\d{2}$/)) {
         this.setError('date', msg || `field is not date ${this.field}`)
      }
      return this
   }

   email(msg?: string) {
      this.type('string')
      if (this.error_message) return this
      if (!this.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
         this.setError('email', msg || `field is not email ${this.field}`)
      }
      return this
   }

   equalWith(value: any, msg?: string) {
      if (this.error_message) return this
      if (this.value !== value) {
         this.setError('equalWith', msg || `field is not equals ${this.field}`)
      }
      return this
   }

   hex(msg?: string) {
      if (this.error_message) return this
      if (!this.value.match(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/)) {
         this.setError('hex', msg || `field is not hex ${this.field}`)
      }
      return this
   }

   lowercase(msg?: string) {
      this.type('string')
      if (this.error_message) return this
      if (!this.value.match(/^[a-z]/)) {
         this.setError('lowercase', msg || `field is not lowercase ${this.field}`)
      }
      return this
   }

   upperCase(msg?: string) {
      this.type('string')
      if (this.error_message) return this
      if (!this.value.match(/^[A-Z]/)) {
         this.setError('upperCase', msg || `field is not uppercase ${this.field}`)
      }
      return this
   }

   url(msg?: string) {
      this.type('string')
      if (this.error_message) return this
      if (!this.value.match(/http(s)?:\/\/(www\.)?/)) {
         this.setError('url', msg || `field is not url ${this.field}`)
      }
      return this
   }

   max(max: number, msg?: string) {
      if (this.error_message) return this
      if (this.value.length > max) {
         this.setError('max', msg || `field is more than ${max} ${this.field}`)
      }
      return this
   }

   maxNumberRange(max: number, msg?: string) {
      this.type('number')
      if (this.error_message) return this
      if (this.value > max) {
         this.setError('maxNumberRange', msg || `field is more than ${max} ${this.field}`)
      }
      return this
   }
   maxWords(max: number, msg?: string) {
      this.type('string')
      if (this.error_message) return this
      if (this.value.split(' ').length > max) {
         this.setError('maxWords', msg || `field is more than ${max} ${this.field}`)
      }
      return this
   }
   mediumPassword(msg?: string) {
      this.type('string')
      if (this.error_message) return this
      if (!this.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
         this.setError('mediumPassword', msg || `field is not medium password ${this.field}`)
      }
      return this
   }
   strongPassword(msg?: string) {
      this.type('string')
      if (this.error_message) return this
      if (!this.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)) {
         this.setError('strongPassword', msg || `field is not strong password ${this.field}`)
      }
      return this
   }

   min(min: number, msg?: string) {
      if (this.error_message) return this
      if (this.value.length < min) {
         this.setError('min', msg || `field is less than ${min} ${this.field}`)
      }
      return this
   }

   minNumberRange(min: number, msg?: string) {
      this.type('number')
      if (this.error_message) return this
      if (this.value < min) {
         this.setError('minNumberRange', msg || `field is less than ${min} ${this.field}`)
      }
      return this
   }

   minWords(min: number, msg?: string) {
      this.type('string')
      if (this.error_message) return this
      if (this.value.split(' ').length < min) {
         this.setError('minWords', msg || `field is less than ${min} ${this.field}`)
      }
      return this
   }

   notAllowedChars(chars: string[], msg?: string) {
      if (this.error_message) return this
      for (let char of chars) {
         if (this.value.includes(char)) {
            this.setError('notAllowedChars', msg || `field contains not allowed characters ${this.field}`)
            break
         }
      }
      return this
   }
   regex(pattern: RegExp, msg?: string) {
      if (this.error_message) return this
      if (!pattern.test(this.value)) {
         this.setError('regex', msg || `field does not match the pattern ${this.field}`)
      }
      return this
   }

   oneOf(values: any[], msg?: string) {
      if (this.error_message) return this
      if (!values.includes(this.value)) {
         this.setError('oneOf', msg || `field is not one of the allowed values ${this.field}`)
      }
      return this
   }
}

export default Factory