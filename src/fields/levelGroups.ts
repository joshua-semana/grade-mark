import { Field } from 'payload';

export const levelGroups: Field = {
  name: 'levelGroup',
  type: 'select',
  admin: {
    isClearable: false,
  },
  options: [
    { label: 'None', value: 'none' },
    { label: 'Pre-Kindergarten', value: 'pre_kindergarten' },
    { label: 'Kindergarten', value: 'kindergarten' },
    { label: 'Elementary', value: 'elementary' },
    { label: 'Junior High School', value: 'junior_high_school' },
    { label: 'Senior High School', value: 'senior_high_school' },
    { label: 'College', value: 'college' },
    { label: 'Graduate School', value: 'graduate_school' },
    { label: 'Vocational/Technical Education', value: 'vocational_technical_education' }
  ],  
  defaultValue: 'none',
}