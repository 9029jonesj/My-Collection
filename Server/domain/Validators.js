// @flow
export const isObject = (toValidate: any) => !!(toValidate && typeof toValidate === 'object');

export const isString = (toValidate: any) => typeof toValidate === 'string';

export const isNumber = (toValidate: any) => typeof toValidate === 'number';

export const isArray = (toValidate: any) => Array.isArray(toValidate) === true;

export const withinRange = (toValidate: number) => (typeof toValidate === 'number') && (toValidate >= 0 && toValidate <= 5);

export const isLengthGreaterThen = (length: number) => (toValidate: string) => toValidate.length > length;
