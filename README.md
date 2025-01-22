This is an initial application that can be used in Onboarding Process of any new React Native Application.

Screens it contains:-

1. Splash Screen:{
   
  a. Navigate to Tutorial if the App is newly installed.

  b. Navigate to Login if the app is not Logged in by the user.

  c. Navigate to BottomNavigation if User has already loggedIn in the Application.

}

3. Tutorial Screen:{

  a. Would be visible only once when the App is newly installed

}

4. Login:{
   Components Used in Login:-
a. customInput{Email} with Validations.// Library Used -> React-Native-Paper.
b. custom Social Login{Google and Facebook(Firebase setUp needed every time )}(Separate Screens for each button).
c. customButton {Sign in}.
d. customPassword{Password} with Validations.// Library Used -> React-Native-Paper.
e. Button for navigation to SignUp Screen.
}. 
 
5. SignUp:{
   Components Used in SignUp:-
a. customInput{First Name, Last Name, Email} with Validations.// Library Used -> React-Native-Paper.
b. customDOB{Date of Birth }.// Library Used -> React-Native-modal-datetime-picker.
c. customPassword{Password, ConfirmPassword} with Validations // Library Used -> React-Native-Paper.
d. customMobileInputBox{Phone number Input with Country Codes and Flags} with Validations. // Library used React-Native-Paper.
e. customBotton{Sign up}.
f Button for navigating to Login Screen.
   }

6. Settings:{
   a. Theme.
   b. CustomlanguageModal{English, Spanish, French, Hindi, Russian, Urdu}.//Managed using asyncStorage/Redux Persist in whole app.
   c. Logout Button with Alert.
}

7. Theme:{
   // All managed using Redux and Redux Persist in Whole APP.
   a. System Default.
   b. Light Mode.
   c. Dark Mode.
}

8. Form Creation Screens using Top Tab Navigator.

