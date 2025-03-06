/* eslint-disable @typescript-eslint/no-unused-vars */
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Icons} from '../../assets';
import { styles } from './styles';
import CustomButton from '../customButton';
import CustomPicker from '../customDropDown';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
}

const FilterModal = ({visible, onClose}: FilterModalProps) => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selected, setSelected] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleCategoryChange = (itemValue: string) => {
    setSelectedCategory(itemValue);
    setShowCategoryDropdown(false);
  };

  const handlePriceRangeChange = (values: number[]) => {
    setPriceRange(values);
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.topContainer} />
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
          activeOpacity={0.5}>
          <Image source={Icons.close} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Filters</Text>
            <TouchableOpacity>
              <Text style={styles.resetText}>{'Reset'}</Text>
            </TouchableOpacity>
          </View>

          {/* Price Range Slider */}
          <View style={styles.subContainer}>
            <Text style={styles.priceRange}>{'Price Range'}</Text>
            <MultiSlider
              values={priceRange}
              containerStyle={styles.sliderContainer}
              sliderLength={330}
              onValuesChange={handlePriceRangeChange}
              min={0}
              max={1000000}
              step={10000}
              allowOverlap={false}
              snapped={true}
              selectedStyle={styles.selectedProgress}
              trackStyle={styles.progressTrack}
              markerStyle={styles.progressMarker}
            />
            <View style={styles.rangeContainer}>
              <Text>{priceRange[0]}</Text>
              <Text>{priceRange[1]}</Text>
            </View>
            <View>
              <Text style={styles.priceRange}>Type</Text>
              <View style={styles.choiceContainer}>
                <TouchableOpacity
                  style={[
                    styles.Button,
                    selected === 1 ? styles.selectedButton : null,
                  ]}
                  onPress={() => setSelected(1)}>
                  <Text
                    style={[
                      styles.buttonText,
                      selected === 1 ? styles.selectedButtonText : null,
                    ]}>
                    {'Honda'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.Button,
                    selected === 2 ? styles.selectedButton : null,
                  ]}
                  onPress={() => setSelected(2)}
                  >
                  <Text
                    style={[
                      styles.buttonText,
                      selected === 2 ? styles.selectedButtonText : null,
                    ]}>
                    {'HI+'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.Button,
                    selected === 3 ? styles.selectedButton : null,
                  ]}
                  onPress={() => setSelected(3)}>
                  <Text
                    style={[
                      styles.buttonText,
                      selected === 3 ? styles.selectedButtonText : null,
                    ]}>
                    {'HI Value+'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categoriesContainer}>
              <Text style={styles.priceRange}>{'Categories'}</Text>
              <CustomPicker
                selectedValue={selectedCategory}
                onValueChange={itemValue => handleCategoryChange(itemValue)}
              />
            </View>
            <CustomButton
              buttonText={'Apply'}
              onPress={onClose}
              buttonStyle={styles.applyButton}
              textStyle={styles.applyText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
