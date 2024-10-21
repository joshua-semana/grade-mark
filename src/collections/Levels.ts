import { url } from '@/fields/url';
import viewOrder from '@/fields/viewOrder';
import { formatToURL } from '@/utilities/formatToURL';
import { trimTextField } from '@/utilities/trimTextField';
import { CollectionConfig } from 'payload';

const Levels: CollectionConfig = {
  slug: 'levels',
  admin: {
    useAsTitle: 'name',
    defaultColumns: [
      'name',
      'group',
      'viewOrder'
    ]
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true
    },
    {
      name: 'group',
      type: 'relationship',
      relationTo: 'level-groups',
      required: true,
      admin: {
        allowEdit: false,
      }
    },
    viewOrder,
    url
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        trimTextField({ data, fieldName: 'name' }),
        formatToURL({ data, prefix: '/levels', baseField: 'name' })
      }
    ]
  }
}

export default Levels;