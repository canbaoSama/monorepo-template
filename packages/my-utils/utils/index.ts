export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)
export const isString = (val: unknown): val is string => typeof val === 'string'
