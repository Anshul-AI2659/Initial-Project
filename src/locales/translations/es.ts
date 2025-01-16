
export const Spanish = {
  signUp: {
    title: 'Crea tu cuenta',
    subTitle: 'Por favor ingresa tus datos para registrarte.',
    firstNameLabel: 'Nombre',
    lastNameLabel: 'Apellido',
    emailLabel: 'Correo electrónico',
    phoneLabel: 'Número de móvil',
    privacyPolicy:
      'Al aceptar, aceptas nuestra Política de Privacidad y Términos de Uso',
    nextButton: 'Siguiente',
    alreadyAccount: '¿Ya tienes una cuenta?',
    login: ' Iniciar sesión',
    selectLanguage: 'Seleccionar idioma',
    error: {
      name: 'Por favor, use solo letras alfabéticas y la longitud mínima es de 3 caracteres.',
      email: 'Por favor, ingrese un correo electrónico válido.',
      mobile: 'El número de móvil debe tener al menos 5 dígitos y como máximo 13 dígitos.',
    },
  },
  login: {
    title: 'Bienvenido a ReelTrak',
    subTitle:
      'Ingrese su número de móvil y le enviaremos un código de verificación',
    phoneLabel: 'Número de móvil',
    mobileError: 'El número de móvil debe tener entre 5 y 13 dígitos.',
    nextButton: 'Siguiente',
    signUpPrompt: '¿No tienes una cuenta?',
    signUp: 'Regístrate',
  },
  details: {
    title: 'Ayúdanos a conocerte más',
    subTitle: 'Indica si trabajas para un estudio, una empresa de producción o si eres trabajador autónomo.',
    studio: 'Estudio',
    production: 'Empresa de producción',
    freelance: 'Freelance',
    select: 'Por favor selecciona el estudio para el que trabajas',
    placeholder: 'Buscar estudio...',
    emptyText: 'No se encontraron estudios',
    continue: 'Continuar',
  },
  filterScreen: {
    title: 'Ayúdanos a conocerte mejor',
    subTitle: 'Por favor, selecciona el estudio para el que trabajas',
    placeholder: 'Buscar estudio...',
    emptyText: 'No se encontraron registros',
    continue: 'Continuar',
  },
  profile:{
  header: {
    back: 'Atrás',
    skip: 'Omitir',
    title: 'Configuración del perfil',
  },
  detailText:
    'Por favor, añada una foto de perfil para ayudar a su equipo de producción a reconocerle en el campo.',
  button: {
    continue: 'Continuar',
    uploadFromGallery: 'Subir desde galería',
    openCamera: 'Abrir cámara',
    removeIcon: 'Eliminar icono',
  },
},
studio:{
  title: 'Ayúdanos a conocerte mejor',
  detailText: 'Por favor seleccione su departamento',
    placeholder: 'Buscar departamento...',
    noRecords: 'No se encontraron estudios',
    continue: 'Continuar',
},
otpVerification: {
  title: 'Verificación OTP',
  subtitle: 'Ingrese el código de 4 dígitos enviado a su número de móvil',
  verify: 'Verificar OTP',
  errorMessages: {
    invalidOtp: 'Código OTP incorrecto',
    otpLength: 'Por favor, introduzca un código de 4 dígitos.',
    maxAttempts: 'Has alcanzado el número máximo de intentos. Inténtalo de nuevo en 5 minutos.',
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
