interface FormatSlugArgs {
  data: any;
}

export const formatSlug = ({ data }: FormatSlugArgs) => {
  if (data.name) {
    data.slug = data.name.toLowerCase().replace(/\s+/g, '-');
  }

  return data;
}