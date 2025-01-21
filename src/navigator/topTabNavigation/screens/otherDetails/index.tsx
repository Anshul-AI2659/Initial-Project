/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import {useThemeColors} from '../../../../utils/theme';
import {useTranslation} from 'react-i18next';

interface OtherDetailsProps {
  navigation: any;
}

const OtherDetails = ({navigation}: OtherDetailsProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.mainContainer}>
          <Text style={styles.text}>In Progress ...</Text>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default OtherDetails;
