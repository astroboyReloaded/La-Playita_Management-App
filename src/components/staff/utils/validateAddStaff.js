export const firstName = {
  id: 'fN',
  name: 'first',
  label: 'Nombre(s)',
  type: 'text',
  validation: {
    required: 'Campo necesario.',
    minLength: {
      value: 2,
      message: 'Este nombre está muy corto!',
    },
    pattern: {
      value: /^[A-Z][a-z]*(?: [A-Z][a-z]*)?$/,
      message: 'La primera con mayúscula.',
    },
  },
};

export const lastName = {
  id: 'lN',
  name: 'last',
  label: 'Apellido(s)',
  type: 'text',
  validation: {
    required: 'Campo necesario.',
    maxLength: {
      value: 30,
      message: 'No tan largo!.',
    },
    pattern: {
      value: /^[A-Z][a-z]*(?: [A-Z][a-z]*)?$/,
      message: 'La primera con mayúscula.',
    },
  },
};

export const role = {
  id: 'rl',
  inputName: 'role',
  label: 'Rol',
  validation: {
    required: true,
    validate: (value) => role.selectOptions.includes(value) || 'EL rol es requerido.',
  },
  selectOptions: ['owner', 'manager', 'server', 'cook', 'assistant'],
};
