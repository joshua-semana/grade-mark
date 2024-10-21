interface TrimTextFieldArgs {
  data: any;
  fieldName: string;
  arrayFieldName?: string;
}

export const trimTextField = ({ data, fieldName, arrayFieldName }: TrimTextFieldArgs) => {
  if (arrayFieldName && Array.isArray(data?.[arrayFieldName])) {
    data[arrayFieldName] = data[arrayFieldName].map((field: any) => {
      if (typeof field?.[fieldName] === 'string') {
        field[fieldName] = field[fieldName].trim();
      }
      
      return field;
    });
  } else if (typeof data?.[fieldName] === 'string') {
    data[fieldName] = data[fieldName].trim();
  }

  return data;
};