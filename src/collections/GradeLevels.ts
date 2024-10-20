import { CollectionConfig } from 'payload';
import { trimTextFieldHook } from '@/hooks/trimTextFieldHook';

export const GradeLevels: CollectionConfig = {
  slug: 'grade-levels',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'visible',
      type: 'radio',
      options: [
        { label: 'True', value: 'true' },
        { label: 'False', value: 'false' },
      ],
      defaultValue: 'true',
    }
  ],
  admin: {
    useAsTitle: 'name',
    defaultColumns: [
      'name',
      'visible',
      'createdAt'
    ],
  },
  hooks: {
    beforeChange: [
      ({ data }) => trimTextFieldHook({ data, fieldName: 'name' })
    ]
  }
}