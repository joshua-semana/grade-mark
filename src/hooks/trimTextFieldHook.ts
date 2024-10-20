interface TrimTextFieldHookArgs {
  data: any;
  fieldName: string; 
}

export const trimTextFieldHook = ({ data, fieldName }: TrimTextFieldHookArgs) => {
  if (typeof data?.[fieldName] === 'string') {
    data[fieldName] = data[fieldName].trim();
  }

  return data;
};