// {
//     "selectLanguage": "भाषा चुनें",
//     "email": "ईमेल",
//     "password": "पासवर्ड",
//     "login": "लॉगिन करें"
//   }

export const Hindi = {
  signUp: {
    title: 'खाता बनाएं',
    subTitle: 'साइन अप करने के लिए कृपया अपनी जानकारी दर्ज करें।',
    firstNameLabel: 'पहला नाम',
    lastNameLabel: 'अंतिम नाम',
    dob: 'जन्म तिथि',
    emailLabel: 'ईमेल पता',
    phoneLabel: 'मोबाइल नंबर',
    passwordLabel: 'पासवर्ड',
    cnfPasswordLabel: 'पासवर्ड की पुष्टि करें',
    signUp: 'साइन अप करें',
    alreadyAccount: 'क्या आपके पास पहले से एक खाता है?',
    login: ' लॉगिन करें',
    selectLanguage: 'भाषा का चयन करें',
    error: {
      name: 'कृपया केवल वर्णमाला के अक्षरों का उपयोग करें और न्यूनतम लंबाई 3 वर्ण होनी चाहिए।',
      email: 'कृपया मान्य ईमेल दर्ज करें',
      mobile: 'मोबाइल नंबर कम से कम 5 अंकों और अधिकतम 13 अंकों का होना चाहिए।',
    },
  },

  login: {
    title: 'साइन इन करें',
    subTitle: 'वापसी पर स्वागत है! कृपया अपने विवरण दर्ज करें',
    phoneLabel: 'मोबाइल नंबर',
    emailLabel: 'ईमेल पता',
    passwordLabel: 'पासवर्ड',
    forgotPass: 'पासवर्ड भूल गए?',
    signin: 'साइन इन करें',
    google: 'गूगल से साइन इन करें',
    facebook: 'फेसबुक से साइन इन करें',
    mobileError:
      'मोबाइल नंबर कम से कम 5 अंकों और अधिकतम 13 अंकों का होना चाहिए।',
    nextButton: 'अगला',
    signUpPrompt: 'क्या आपके पास खाता नहीं है?',
    signUp: 'साइन अप करें',
  },

  forgotPassword: {
    title: 'पासवर्ड भूल गए?',
    subTitle: 'चिंता न करें, हम सत्यापन के लिए आपके पंजीकृत मोबाइल नंबर पर एक ओटीपी भेजेंगे।',
    phoneLabel: 'मोबाइल नंबर',
    send: 'ओटीपी भेजें',
  },
  
  filterScreen: {
    title: 'हमें आपके बारे में और जानने में मदद करें',
    subTitle: 'कृपया उस स्टूडियो का चयन करें जिसके लिए आप काम करते हैं',
    placeholder: 'स्टूडियो खोजें...',
    emptyText: 'कोई रिकॉर्ड नहीं मिला',
    continue: 'जारी रखें',
  },
  settings: {
    headerTitle: 'सेटिंग्स',
    general: 'सामान्य',
    theme: 'थीम',
    language: 'भाषा',
    content: 'सामग्री',
    privacy: 'गोपनीयता नीति',
    terms: 'नियम और शर्तें',
    button: {
      continue: 'जारी रखें',
      uploadFromGallery: 'गैलरी से अपलोड करें',
      openCamera: 'कैमरा खोलें',
      removeIcon: 'आइकन हटाएं',
      logout: 'लॉगआउट',
    },
  },
  theme: {
    headerTitle: 'थीम',
    dark: 'डार्क थीम',
    save: 'सेव करें',
  },
  dashboard: {
    dashboard: 'डैशबोर्ड',
  },
  generalDetails: {
    shipment: 'शिपमेंट1 प्रकार*',
  },
  otpVerification: {
    title: 'ओटीपी सत्यापन',
    subtitle: 'अपने मोबाइल नंबर पर भेजा गया 4 अंकों का कोड दर्ज करें',
    verify: 'ओटीपी सत्यापित करें',
    errorMessages: {
      invalidOtp: 'गलत ओटीपी दर्ज किया गया',
      otpLength: 'कृपया 4 अंकों का कोड दर्ज करें।',
      maxAttempts:
        'आपने अधिकतम प्रयासों की सीमा पार कर ली है। कृपया 5 मिनट में पुनः प्रयास करें।',
    },
    verified: 'आपका खाता सत्यापित हो गया है!',
    backButton: 'वापस',
    resend: {
      prompt: 'कोड नहीं मिला?',
      resendText: 'पुनः भेजें',
      codeResent: 'आपके फोन नंबर पर नया कोड भेजा गया है।',
    },
  },
};
