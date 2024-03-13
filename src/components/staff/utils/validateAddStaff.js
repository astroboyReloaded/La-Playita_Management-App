export const firstName = {
  id: 'fN',
  name: 'first',
  label: 'Nombre(s)',
  type: 'text',
  placeholder: 'nombre(s)',
  validation: {
    required: 'Campo necesario.',
    minLength: {
      value: 2,
      message: 'Este nombre está muy corto!',
    },
    pattern: {
      value: /^[A-Z][a-z]*$/,
      message: 'La primera con mayúscula.',
    },
  },
};

export const lastName = {
  id: 'lN',
  name: 'last',
  label: 'Apellidos',
  type: 'text',
  placeholder: 'primer apellido',
  validation: {
    required: 'Campo necesario.',
    maxLength: {
      value: 30,
      message: 'No tan largo!.',
    },
    pattern: {
      value: /^[A-Z][a-z]*$/,
      message: 'La primera con mayúscula.',
    },
  },
};
