import { Field } from 'payload';

export const slug: Field = {
  name: 'slug',
  type: 'text',
  required: true,
  admin: {
    description: 'Auto-generated slug based on given name.',
    readOnly: true,
  },
}