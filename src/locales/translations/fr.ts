export const French = {
  signUp: {
    title: 'Créez votre compte',
    subTitle: 'Veuillez entrer vos informations pour vous inscrire.',
    firstNameLabel: 'Prénom',
    lastNameLabel: 'Nom de famille',
    emailLabel: 'Adresse e-mail',
    phoneLabel: 'Numéro de téléphone',
    privacyPolicy:
      "En acceptant, vous acceptez notre politique de confidentialité et nos conditions d'utilisation",
    nextButton: 'Suivant',
    alreadyAccount: 'Vous avez déjà un compte ?',
    login: ' Se connecter',
    selectLanguage: 'Sélectionner la langue',
    error: {
      name: 'Veuillez utiliser uniquement des lettres alphabétiques et la longueur minimale est de 3 caractères.',
      email: 'Veuillez entrer un email valide.',
      mobile: 'Le numéro de mobile doit comporter au moins 5 chiffres et au maximum 13 chiffres.',
    },
  },
  login: {
    title: 'Bienvenue sur ReelTrak',
    subTitle:
      'Entrez votre numéro de mobile et nous vous enverrons un code de vérification',
    phoneLabel: 'Numéro de téléphone',
    mobileError: 'Le numéro de mobile doit contenir entre 5 et 13 chiffres.',
    nextButton: 'Suivant',
    signUpPrompt: "Vous n'avez pas de compte ?",
    signUp: "S'inscrire",
  },
  details: {
    title: 'Aidez-nous à mieux vous connaître',
    subTitle:
      'Veuillez indiquer si vous travaillez pour un studio, une société de production ou si vous êtes travailleur indépendant.',
    studio: 'Studio',
    production: 'Société de production',
    freelance: 'Freelance',
    select: 'Veuillez sélectionner le studio pour lequel vous travaillez',
    placeholder: 'Rechercher un studio...',
    emptyText: 'Aucun studio trouvé',
    continue: 'Continuer',
  },
  filterScreen: {
    title: 'Aidez-nous à mieux vous connaître',
    subTitle: 'Veuillez sélectionner le studio pour lequel vous travaillez',
    placeholder: 'Rechercher un studio...',
    emptyText: 'Aucun enregistrement trouvé',
    continue: 'Continuer',
  },
  profile: {
    header: {
      back: 'Retour',
      skip: 'Passer',
      title: 'Configuration du profil',
    },
    detailText:
      'Veuillez ajouter une photo de profil pour aider votre équipe de production à vous reconnaître sur le terrain.',
    button: {
      continue: 'Continuer',
      uploadFromGallery: 'Télécharger depuis la galerie',
      openCamera: 'Ouvrir la caméra',
      removeIcon: "Supprimer l'icône",
    },
  },
  studio:{
    title: 'Aidez-nous à mieux vous connaître',
      detailText: 'Veuillez sélectionner votre département',
      placeholder: 'Rechercher un département...',
      noRecords: 'Aucun studio trouvé',
      continue: 'Continuer',
  },
  otpVerification: {
    title: 'Vérification OTP',
    subtitle: 'Entrez le code à 4 chiffres envoyé à votre numéro de mobile',
    verify: 'Vérifier OTP',
    errorMessages: {
      invalidOtp: 'Code OTP incorrect',
      otpLength: 'Veuillez entrer un code à 4 chiffres.',
      maxAttempts: 'Vous avez atteint le nombre maximum de tentatives. Réessayez dans 5 minutes.',
    },
    verified: 'Votre compte a été vérifié!',
    backButton: 'Retour',
    resend: {
      prompt: 'Vous n\'avez pas reçu le code?',
      resendText: 'Renvoyer',
      codeResent: 'Un nouveau code a été envoyé à votre numéro de téléphone.',
    },
  }
};
