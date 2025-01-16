// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const GeneralDetails = () => {
//   return (
//     <View>
//       <Text>General Details</Text>
//     </View>
//   );
// };

// export default GeneralDetails;

// const styles = StyleSheet.create({});

import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  useColorScheme,
} from 'react-native';
import {Styles} from './styles';
import CheckBox from 'react-native-check-box';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigator/StackNavigation';
// import { useTranslation } from 'react-i18next';

interface GeneralDetailsProps {
  navigation: StackNavigationProp<StackParamList>;
}

const GeneralDetails = ({navigation}: GeneralDetailsProps) => {
  const theme = useColorScheme();
  const styles = Styles(theme);
  // const {t} = useTranslation();
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
                <Text style={styles.headerText}>shipment1 Type*</Text>
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
