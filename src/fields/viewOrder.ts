import { Field } from 'payload';

const viewOrder: Field = {
  name: 'viewOrder',
  type: 'number',
  required: true,
  defaultValue: 0,
  admin: {
    description: 'This is for the order sequence of navigations and list view.'
  },
}

export default viewOrder;