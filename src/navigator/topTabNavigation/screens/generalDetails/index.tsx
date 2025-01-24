import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useThemeColors} from '../../../../utils/theme';
import {TopTabParamList} from '../../../../utils/types';
import {Styles} from './styles';
import {Colors} from '../../../../utils/colors';
import {ScreenNames} from '../../../../utils/screenNames';
import CustomButton from '../../../../components/customButton';

interface Item {
  id: number;
  title: string;
}

interface RenderItemProps {
  item: Item;
  index: number;
}
interface GeneralDetailsProps {
  navigation: MaterialTopTabNavigationProp<TopTabParamList>;
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

  const handleCheckboxToggle = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const handleContinue = () => {
    navigation.navigate(ScreenNames.Shipment);
  };

  const renderItem = ({item, index}: RenderItemProps) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => handleCheckboxToggle(index)}
      style={styles.item}>
      <CheckBox
        style={styles.checkbox}
        onClick={() => handleCheckboxToggle(index)}
        isChecked={checkedItems[index]}
        checkBoxColor={checkedItems[index] ? Colors.primary : Colors.primary}
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
          keyExtractor={(_item, index) => index.toString()}
          ListHeaderComponent={
            <View style={styles.subContainer}>
              <View style={styles.contentHeader}>
                <Text style={styles.headerText}>
                  {t('generalDetails.shipment')}
                </Text>
              </View>
            </View>
          }
        />
      </View>
      <View style={styles.footer}>
       
        <CustomButton buttonText={'Next'} onPress={handleContinue} />
      </View>
    </SafeAreaView>
  );
};

export default GeneralDetails;
