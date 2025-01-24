
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { useThemeColors } from '../../../../utils/theme';
import { TopTabParamList } from '../../../../utils/types';
import { Styles } from './styles';

interface OtherDetailsProps {
  navigation: MaterialTopTabNavigationProp<TopTabParamList>;
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
