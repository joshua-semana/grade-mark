import { Field } from 'payload';

export const url: Field = {
  name: 'url',
  label: 'URL Path',
  type: 'text',
  admin: {
    placeholder: 'Auto-generated URL path based on name',
    position: 'sidebar',
    readOnly: true,
  }
}