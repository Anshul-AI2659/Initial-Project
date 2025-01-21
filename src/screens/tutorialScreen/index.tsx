import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { StackParamList } from '../../utils/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {steps} from '../../utils/data';
import {Styles} from './styles';
import { useThemeColors } from '../../utils/theme';

type TutorialScreenProps = {
  navigation: StackNavigationProp<StackParamList>;
};

const TutorialScreen = ({navigation}: TutorialScreenProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }
  };

  const handleSkip = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: steps[currentStep].image}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{steps[currentStep].title}</Text>
        <Text style={styles.description}>{steps[currentStep].description}</Text>
        <View style={styles.pagination}>
          {steps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentStep ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TutorialScreen;
