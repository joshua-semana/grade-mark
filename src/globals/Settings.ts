import { GlobalConfig } from 'payload';

const Settings: GlobalConfig = {
  slug: 'settings',
  fields: [
    {
      name: 'schoolInformation',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'schoolName',
              type: 'text',
              required: true,
            },
            {
              name: 'schoolAcronym',
              type: 'text',
              required: true
            }
          ]
        },
        {
          name: 'schoolAddress',
          type: 'text',
        }
      ]
    }
  ],
}

export default Settings;