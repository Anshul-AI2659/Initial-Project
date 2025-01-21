

import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Styles} from './styles';
import CheckBox from 'react-native-check-box';
import { useThemeColors } from '../../../../utils/theme';
import { useTranslation } from 'react-i18next';

interface GeneralDetailsProps {
  navigation: any;
}

const GeneralDetails = ({navigation}: GeneralDetailsProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const {t} = useTranslation();
  const itemsArray = [
    {id: 1, title: 'Pickup Leg'},
    {id: 2, title: 'Delivery Leg'},
    {id: 3, title: 'Point to Point'},
  ];

  const [checkedItems, setCheckedItems] = useState(
    new Array(itemsArray.length).fill(false),
  );


  const handleCheckboxToggle = (index: any) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const handleContinue = () => {
    navigation.navigate('Shipment1Details');
  };

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => handleCheckboxToggle(index)}
      style={styles.item}>
      <CheckBox
        style={styles.checkbox}
        onClick={() => handleCheckboxToggle(index)}
        isChecked={checkedItems[index]}
        checkBoxColor={checkedItems[index] ? '#486284' : '#486284'}
        checkedImage={
          <View style={styles.checkedBox}>
            <Text style={styles.tick}>✓</Text>
          </View>
        }
        unCheckedImage={<View style={styles.uncheckedBox} />}
      />
      <Text
        style={[styles.leftText, checkedItems[index] && styles.checkedText]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeareastyle}>
      <View style={styles.listContainer}>
        <FlatList
          data={itemsArray}
          alwaysBounceVertical
          renderItem={renderItem}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={
            <View style={styles.subContainer}>
              <View style={styles.contentHeader}>
                <Text style={styles.headerText}>{t('generalDetails.shipment')}</Text>
              </View>
            </View>
          }
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleContinue}
          activeOpacity={0.7}>
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GeneralDetails;
