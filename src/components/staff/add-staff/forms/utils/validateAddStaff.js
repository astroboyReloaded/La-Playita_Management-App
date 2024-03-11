export const firstName = {
  id: 'fN',
  name: 'first',
  label: 'Nombre(s)',
  type: 'text',
  placeholder: 'nombre(s)',
  validation: {
    firstOptions: {
      required: 'Es necesario.',
      minLength: {
        value: 2,
        message: 'Este nombre está muy corto!',
      },
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: 'La primera con mayúscula.',
      },
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
    firstOptions: {
      required: 'Es necesario.',
      maxLength: {
        value: 30,
        message: 'No tan largo!.',
      },
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: 'La primera con mayúscula.',
      },
    },
  },
};
