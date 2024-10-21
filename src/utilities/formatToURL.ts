interface FormatToURLArgs {
  data: any;
  prefix?: string;
  baseField: string;
  arrayFieldName?: string;
}

export const formatToURL = ({ data, prefix, baseField, arrayFieldName }: FormatToURLArgs) => {
  if (arrayFieldName && Array.isArray(data?.[arrayFieldName])) {
    data[arrayFieldName] = data[arrayFieldName].map((field) => {
      const url = '/' + field[baseField].toLowerCase().replace(/\s+/g, '-');
      field.url = (prefix) ? prefix + url : url;

      return field;
    })
  } else if (data[baseField]) {
    const url = '/' + data[baseField].toLowerCase().replace(/\s+/g, '-');
    data.url = (prefix) ? prefix + url : url;
  }

  return data;
}