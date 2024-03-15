export const firstName = {
  id: 'fN',
  inputName: 'first',
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
  inputName: 'last',
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

export const cellphone = {
  id: 'cl',
  inputName: 'cellphone',
  label: 'Celular',
  type: 'text',
  validation: {
    required: 'EL cel es requerido.',
    pattern: {
      value: /^[0-9]{10}$/,
      message: '10 digitos.',
    },
  },
};

export const email = {
  id: 'em',
  inputName: 'email',
  label: 'Correo Electrónico',
  type: 'text',
  validation: {
    required: 'El correo es requerido.',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Correo invalido.',
    },
  },
};

export const userName = {
  id: 'uN',
  inputName: 'userName',
  label: 'Nombre de Usuario',
  type: 'text',
  validation: {
    required: 'El usuario es requerido.',
    minLength: {
      value: 2,
      message: '2 a 16 caracteres.',
    },
    pattern: {
      value: /^[A-z][a-z]+$/,
      message: 'La primera con mayúscula.',
    },
  },
};

export const userPassword = {
  id: 'uP',
  inputName: 'userPassword',
  label: 'Crea tu contraseña',
  type: 'password',
  validation: {
    required: 'La contraseña es requerida.',
    length: {
      value: 5,
      message: 'Debe tener 5 números.',
    },
    pattern: {
      value: /^(?!.*(\d)\1)(?!.*(\d)(?:\d|\1){2})(?!.*(\d)(?:\d\d|\1){2})\d{5}$/,
      message: 'Nungún número se debe repetir continuamente, y no debe tener dos o más números consecutivos.',
    },
  },
};

export const confirmPassword = {
  id: 'cP',
  inputName: 'confirmPassword',
  label: 'Confirma tu Contraseña',
  type: 'password',
  validation: {
    required: 'Debes confirmar tu contraseña.',
    validate: (value, { userPassword }) => value === userPassword || 'Las contraseñas no coinciden.',
  },
};
