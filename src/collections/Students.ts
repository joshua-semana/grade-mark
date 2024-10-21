import { CollectionConfig } from 'payload';

export const Students: CollectionConfig = {
  slug: 'students',
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'gradeGroup',
      label: 'Grade Group',
      type: 'relationship',
      relationTo: 'levels',
      required: true,
    },
  ],
}