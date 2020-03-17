type ActionTypeFromObject<T extends any> = ReturnType<T[keyof T]>;

export default ActionTypeFromObject;
