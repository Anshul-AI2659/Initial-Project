export const Spanish = {
  signUp: {
    title: 'Crear Cuenta',
    subTitle: 'Por favor, introduce tus datos para registrarte.',
    firstNameLabel: 'Nombre',
    lastNameLabel: 'Apellido',
    dob: 'Fecha de Nacimiento',
    emailLabel: 'Dirección de Correo Electrónico',
    phoneLabel: 'Número de Móvil',
    passwordLabel: 'Contraseña',
    cnfPasswordLabel: 'Confirmar Contraseña',
    signUp: 'Regístrate',
    alreadyAccount: '¿Ya tienes una cuenta?',
    login: ' Iniciar Sesión',
    selectLanguage: 'Seleccionar Idioma',
    error: {
      name: 'Por favor, use solo letras alfabéticas y el mínimo es de 3 caracteres.',
      email: 'Por favor, ingrese un correo electrónico válido.',
      password:
        'La contraseña debe contener: una letra mayúscula, una letra minúscula, un valor numérico, un carácter especial y al menos 8 caracteres.',
      confirmPassword: 'Las contraseñas no coinciden.',
      mobile:
        'El número de móvil debe tener un mínimo de 5 dígitos y un máximo de 13 dígitos.',
    },
  },

  login: {
    title: 'Iniciar Sesión',
    subTitle: '¡Bienvenido de nuevo! Por favor, introduce tus datos',
    phoneLabel: 'Número de Móvil',
    emailLabel: 'Dirección de Correo Electrónico',
    passwordLabel: 'Contraseña',
    forgotPass: '¿Olvidaste tu Contraseña?',
    signin: 'Iniciar Sesión',
    google: 'Iniciar sesión con Google',
    facebook: 'Iniciar sesión con Facebook',
    mobileError:
      'El número de móvil debe tener un mínimo de 5 dígitos y un máximo de 13.',
    nextButton: 'Siguiente',
    signUpPrompt: '¿No tienes una cuenta?',
    signUp: 'Regístrate',
  },

  forgotPassword: {
    title: '¿Olvidaste tu Contraseña?',
    subTitle:
      'No te preocupes, te enviaremos un OTP a tu número de móvil registrado para la verificación.',
    phoneLabel: 'Número de Móvil',
    send: 'Enviar OTP',
  },

  filterScreen: {
    title: 'Ayúdanos a conocerte mejor',
    subTitle: 'Por favor, selecciona el estudio para el que trabajas',
    placeholder: 'Buscar estudio...',
    emptyText: 'No se encontraron registros',
    continue: 'Continuar',
  },
  settings: {
    headerTitle: 'Configuración',
    general: 'General',
    theme: 'Tema',
    language: 'Idioma',
    content: 'Contenido',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
    button: {
      continue: 'Continuar',
      uploadFromGallery: 'Subir desde la Galería',
      openCamera: 'Abrir Cámara',
      removeIcon: 'Eliminar Icono',
      logout: 'Cerrar Sesión',
    },
  },
  theme: {
    headerTitle: 'Tema',
    light: 'Tema Claro',
    dark: 'Tema Oscuro',
    system: 'Predeterminado del Sistema',
    save: 'Guardar',
  },

  dashboard: {
    dashboard: 'Tablero',
  },
  generalDetails: {
    shipment: 'Tipo de Envío1*',
  },

  otpVerification: {
    title: 'Verificación OTP',
    subtitle: 'Ingrese el código de 4 dígitos enviado a su número de móvil',
    verify: 'Verificar OTP',
    errorMessages: {
      invalidOtp: 'Código OTP incorrecto',
      otpLength: 'Por favor, introduzca un código de 4 dígitos.',
      maxAttempts:
        'Has alcanzado el número máximo de intentos. Inténtalo de nuevo en 5 minutos.',
    },
    verified: '¡Tu cuenta ha sido verificada!',
    backButton: 'Atrás',
    resend: {
      prompt: '¿No recibiste el código?',
      resendText: 'Reenviar',
      codeResent: 'Se ha enviado un nuevo código a tu número de teléfono.',
    },
  },
};
