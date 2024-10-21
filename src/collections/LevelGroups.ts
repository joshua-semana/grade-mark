import viewOrder from '@/fields/viewOrder';
import { trimTextField } from '@/utilities/trimTextField';
import { CollectionConfig } from 'payload';

const LevelGroups: CollectionConfig = {
  slug: 'level-groups',
  admin: {
    useAsTitle: 'name',
    defaultColumns: [
      'name',
      'viewOrder',
      'createdAt'
    ]
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    viewOrder
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => trimTextField({ data, fieldName: 'name' })
    ]
  }
}

export default LevelGroups;