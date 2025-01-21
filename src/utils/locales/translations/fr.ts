export const French = {
  signUp: {
    title: 'Créer un Compte',
    subTitle: 'Veuillez entrer vos informations pour vous inscrire.',
    firstNameLabel: 'Prénom',
    lastNameLabel: 'Nom de Famille',
    dob: 'Date de Naissance',
    emailLabel: 'Adresse Email',
    phoneLabel: 'Numéro de Mobile',
    passwordLabel: 'Mot de Passe',
    cnfPasswordLabel: 'Confirmer le Mot de Passe',
    signUp: "S'inscrire",
    alreadyAccount: 'Vous avez déjà un compte?',
    login: ' Connexion',
    selectLanguage: 'Sélectionner la Langue',
    error: {
      name: 'Veuillez utiliser uniquement des lettres alphabétiques et la longueur minimale est de 3 caractères.',
      email: 'Veuillez entrer un email valide',
      mobile:
        'Le numéro de mobile doit comporter un minimum de 5 chiffres et un maximum de 13 chiffres.',
    },
  },
  login: {
    title: 'Se Connecter',
    subTitle: 'Bienvenue! Veuillez entrer vos informations',
    phoneLabel: 'Numéro de Mobile',
    emailLabel: 'Adresse Email',
    passwordLabel: 'Mot de Passe',
    forgotPass: 'Mot de Passe Oublié?',
    signin: 'Se Connecter',
    google: 'Se connecter avec Google',
    facebook: 'Se connecter avec Facebook',
    mobileError:
      'Le numéro de mobile doit comporter un minimum de 5 chiffres et un maximum de 13 chiffres.',
    nextButton: 'Suivant',
    signUpPrompt: "Vous n'avez pas de compte?",
    signUp: "S'inscrire",
  },

  forgotPassword: {
    title: 'Mot de Passe Oublié?',
    subTitle: 'Pas de soucis, nous vous enverrons un OTP sur votre numéro de mobile enregistré pour la vérification.',
    phoneLabel: 'Numéro de Mobile',
    send: 'Envoyer OTP',
  },
    
  filterScreen: {
    title: 'Aidez-nous à mieux vous connaître',
    subTitle: 'Veuillez sélectionner le studio pour lequel vous travaillez',
    placeholder: 'Rechercher un studio...',
    emptyText: 'Aucun enregistrement trouvé',
    continue: 'Continuer',
  },
  settings: {
    headerTitle: 'Paramètres',
    general: 'Général',
    theme: 'Thème',
    language: 'Langue',
    content: 'Contenu',
    privacy: 'Politique de Confidentialité',
    terms: 'Termes et Conditions',
    button: {
      continue: 'Continuer',
      uploadFromGallery: 'Télécharger depuis la Galerie',
      openCamera: 'Ouvrir la Caméra',
      removeIcon: "Supprimer l'Icône",
      logout: 'Déconnexion',
    },
  },
  theme: {
    headerTitle: 'Thème',
    light: 'Thème Clair',
    dark: 'Thème Sombre',
    system: 'Par Défaut du Système',
    save: 'Sauvegarder',
  },
  
  dashboard: {
    dashboard: 'Tableau de Bord',
  },
  generalDetails: {
    shipment: 'Type de Livraison1*',
  },

  otpVerification: {
    title: 'Vérification OTP',
    subtitle: 'Entrez le code à 4 chiffres envoyé à votre numéro de mobile',
    verify: 'Vérifier OTP',
    errorMessages: {
      invalidOtp: 'Code OTP incorrect',
      otpLength: 'Veuillez entrer un code à 4 chiffres.',
      maxAttempts:
        'Vous avez atteint le nombre maximum de tentatives. Réessayez dans 5 minutes.',
    },
    verified: 'Votre compte a été vérifié!',
    backButton: 'Retour',
    resend: {
      prompt: "Vous n'avez pas reçu le code?",
      resendText: 'Renvoyer',
      codeResent: 'Un nouveau code a été envoyé à votre numéro de téléphone.',
    },
  },
};
