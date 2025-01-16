export const English = {
  signUp: {
    title: 'Create Your Account',
    subTitle: 'Please enter your details to sign up.',
    firstNameLabel: 'First Name',
    lastNameLabel: 'Last Name',
    emailLabel: 'Email Address',
    phoneLabel: 'Mobile Number',
    privacyPolicy:
      'By accepting, you agree to our Privacy Policy and Terms of Use',
    nextButton: 'Next',
    alreadyAccount: 'Already have an account?',
    login: ' Login',
    selectLanguage: 'Select Language',
    error:{
      name:'Please use only alphabetical letters and minimum length is 3 characters.',
      email:'Please enter valid email',
      mobile:'Mobile no. should be min 5 digit and max 13 digit.',
    },
  },
  login: {
    title: 'Welcome to ReelTrak',
    subTitle:
      'Enter your mobile number and we will text you a verification code',
    phoneLabel: 'Mobile Number',
    mobileError: 'Mobile no. should be min 5 digit and max 13 digit.',
    nextButton: 'Next',
    signUpPrompt: "Don't have an account?",
    signUp: 'Sign up',
  },
  details: {
    title: 'Help us to know you more',
    subTitle:
      'Please indicate whether you are employed by a studio, production company, or are a freelance worker.',
    studio: 'Studio',
    production: 'Production Co.',
    freelance: 'Freelance',
    select: 'Please select the studio you work for',
    placeholder: 'Search studio...',
    emptyText: 'No studios found',
    continue: 'Continue',
  },
  filterScreen: {
    title: 'Help us to know you more',
    subTitle: 'Please select the studio you work for',
    placeholder: 'Search studio...',
    emptyText: 'No records found',
    continue: 'Continue',
  },

  profile: {
    header: {
      skip: 'Skip',
      title: 'Profile Setup',
    },
    detailText:
      'Please add a profile photo to help your production team recognize you in the field.',
    button: {
      continue: 'Continue',
      uploadFromGallery: 'Upload From Gallery',
      openCamera: 'Open Camera',
      removeIcon: 'Remove Icon',
    },
  },
  studio: {
    title: 'Help us to know you more',
    detailText: 'Please select your department',
    placeholder: 'Search department...',
    noRecords: 'No studios found',
    continue: 'Continue',
  },
  otpVerification: {
    title: 'OTP Verification',
    subtitle: 'Enter the 4 digit code sent to your mobile number',
    verify: 'Verify OTP',
    errorMessages: {
      invalidOtp: 'Wrong OTP entered',
      otpLength: 'Please enter a 4-digit code.',
      maxAttempts:
        'You have reached the maximum attempts. Please retry in 5 minutes.',
    },
    verified: 'Your account has been verified!',
    backButton: 'Back',
    resend: {
      prompt: "Didn't receive the code? ",
      resendText: 'Resend',
      codeResent: 'A new code has been sent to your phone number.',
    },
  },
};
