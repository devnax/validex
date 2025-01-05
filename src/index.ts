import Factory from "./Factory"

type Schema<D> = {
   [field in keyof D]?: D[field] extends object ? Schema<D[field]> : ((factory: Factory) => Factory);
}

type Factories<D> = { [field in keyof D]: string | Errors<NonNullable<D[field]>> }
type Errors<D> = { [field in keyof D]: string | Factories<NonNullable<D[field]>> }

const validex = <D extends object>(data: D, schema: Schema<D>) => {
   let factories: Factories<D> = {} as Factories<D>
   for (const field in schema) {
      if (!(field in data)) throw new Error(`invalid data field: ${field}`)
      const dataValue = data[field]

      const schemaFn = (schema as any)[field]
      if (typeof schemaFn === 'function') {
         let factory = new Factory
         factory.value = dataValue
         factory.field = field
         schemaFn(factory)
         if (factory.error_message) {
            factories[field] = factory.error_message
         }
      } else {
         let is = typeof dataValue === 'object' && dataValue !== null ? validex(dataValue, schemaFn) : false
         if (is) {
            factories[field] = is as Errors<NonNullable<D[typeof field]>>
         }
      }
   }
   return Object.keys(factories).length ? factories : false
}

let data = {
   name: "Hey",
   age: null,
   ob: {
      a: {
         b: 20
      }
   }
}

const errors = validex(data, {
   name: s => s.type('number', "invalid type").required(),
   age: s => s.required(),
})

console.log(errors);
