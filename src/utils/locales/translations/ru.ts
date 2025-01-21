// {
//     "selectLanguage": "Выберите язык",
//     "email": "Электронная почта",
//     "password": "Пароль",
//     "login": "Войти"
//   }

export const Russian = {
  signUp: {
    title: 'Создать Аккаунт',
    subTitle: 'Пожалуйста, введите свои данные для регистрации.',
    firstNameLabel: 'Имя',
    lastNameLabel: 'Фамилия',
    dob: 'Дата Рождения',
    emailLabel: 'Адрес Электронной Почты',
    phoneLabel: 'Мобильный Номер',
    passwordLabel: 'Пароль',
    cnfPasswordLabel: 'Подтвердите Пароль',
    signUp: 'Зарегистрироваться',
    alreadyAccount: 'Уже есть аккаунт?',
    login: ' Войти',
    selectLanguage: 'Выбрать Язык',
    error: {
      name: 'Используйте только буквенные символы, минимальная длина 3 символа.',
      email: 'Пожалуйста, введите действительный адрес электронной почты',
      mobile: 'Номер телефона должен содержать минимум 5 и максимум 13 цифр.',
    },
  },

  login: {
    title: 'Войти',
    subTitle: 'Добро пожаловать! Пожалуйста, введите свои данные',
    phoneLabel: 'Мобильный Номер',
    emailLabel: 'Адрес Электронной Почты',
    passwordLabel: 'Пароль',
    forgotPass: 'Забыли Пароль?',
    signin: 'Войти',
    google: 'Войти через Google',
    facebook: 'Войти через Facebook',
    mobileError:
      'Номер телефона должен содержать минимум 5 и максимум 13 цифр.',
    nextButton: 'Далее',
    signUpPrompt: 'Нет аккаунта?',
    signUp: 'Зарегистрироваться',
  },

  forgotPassword: {
    title: 'Забыли Пароль?',
    subTitle: 'Не волнуйтесь, мы отправим вам OTP на зарегистрированный номер телефона для проверки.',
    phoneLabel: 'Мобильный Номер',
    send: 'Отправить OTP',
  },
  
  filterScreen: {
    title: 'Помогите нам лучше узнать вас',
    subTitle: 'Пожалуйста, выберите студию, в которой вы работаете',
    placeholder: 'Поиск студии...',
    emptyText: 'Записи не найдены',
    continue: 'Продолжить',
  },
  settings: {
    headerTitle: 'Настройки',
    general: 'Общие',
    theme: 'Тема',
    language: 'Язык',
    content: 'Контент',
    privacy: 'Политика Конфиденциальности',
    terms: 'Условия и Положения',
    button: {
      continue: 'Продолжить',
      uploadFromGallery: 'Загрузить из Галереи',
      openCamera: 'Открыть Камеру',
      removeIcon: 'Удалить Значок',
      logout: 'Выйти',
    },
  },

  theme: {
    headerTitle: 'Тема',
    light: 'Светлая Тема',
    dark: 'Тёмная Тема',
    system: 'Системная По Умолчанию',
    save: 'Сохранить',
  },
  
  dashboard: {
    dashboard: 'Панель Управления',
  },
  generalDetails: {
    shipment: 'Тип Отправки1*',
  },
  otpVerification: {
    title: 'Проверка OTP',
    subtitle: 'Введите 4-значный код, отправленный на ваш мобильный номер',
    verify: 'Проверить OTP',
    errorMessages: {
      invalidOtp: 'Неверный OTP код',
      otpLength: 'Пожалуйста, введите 4-значный код.',
      maxAttempts:
        'Вы достигли максимального количества попыток. Повторите попытку через 5 минут.',
    },
    verified: 'Ваш аккаунт подтверждён!',
    backButton: 'Назад',
    resend: {
      prompt: 'Не получили код?',
      resendText: 'Отправить снова',
      codeResent: 'Новый код был отправлен на ваш номер телефона.',
    },
  },
};
