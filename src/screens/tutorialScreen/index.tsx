import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {StackParamList} from '../../utils/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {steps} from '../../utils/data';
import {Styles} from './styles';
import {useThemeColors} from '../../utils/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenNames } from '../../utils/screenNames';

// type TutorialScreenProps = {
//   navigation: StackNavigationProp<StackParamList>;
// };

// const TutorialScreen = ({navigation}: TutorialScreenProps) => {
//   const theme = useThemeColors();
//   const styles = Styles(theme);
//   const [currentStep, setCurrentStep] = useState(0);

//   const saveTutorialSeen = async () => {
//     try {
//       await AsyncStorage.setItem('hasSeenTutorial', 'true'); 
//     } catch (error) {
//       console.error('Error saving tutorial completion flag:', error);
//     }
//   };

//   const handleNext = async () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       await saveTutorialSeen();
//       navigation.reset({
//         index: 0,
//         routes: [{name: ScreenNames.Login}],
//       });
//     }
//   };

//   const handleSkip = async () => {
//     await saveTutorialSeen();
//     navigation.reset({
//       index: 0,
//       routes: [{name: ScreenNames.Login}],
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{uri: steps[currentStep].image}} style={styles.image} />
//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>{steps[currentStep].title}</Text>
//         <Text style={styles.description}>{steps[currentStep].description}</Text>
//         <View style={styles.pagination}>
//           {steps.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.dot,
//                 index === currentStep ? styles.activeDot : styles.inactiveDot,
//               ]}
//             />
//           ))}
//         </View>
//         <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
//           <Text style={styles.nextButtonText}>
//             {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
//           <Text style={styles.skipButtonText}>Skip</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default TutorialScreen;


type TutorialScreenProps = {
  navigation: StackNavigationProp<StackParamList>;
};

const TutorialScreen = ({ navigation }: TutorialScreenProps) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  const [currentStep, setCurrentStep] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const saveTutorialSeen = async () => {
    try {
      await AsyncStorage.setItem('hasSeenTutorial', 'true');
    } catch (error) {
      console.error('Error saving tutorial completion flag:', error);
    }
  };

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      const nextIndex = currentStep + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex });
      setCurrentStep(nextIndex);
    } else {
      await saveTutorialSeen();
      navigation.reset({
        index: 0,
        routes: [{ name: ScreenNames.Login }],
      });
    }
  };

  const handleSkip = async () => {
    await saveTutorialSeen();
    navigation.reset({
      index: 0,
      routes: [{ name: ScreenNames.Login }],
    });
  };

  const renderItem = ({ item }: { item: typeof steps[0] }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={steps}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / styles.slide.width);
          setCurrentStep(newIndex);
        }}
      />

      {/* Fixed Pagination Dots */}
      <View style={{paddingBottom:60}}>
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

      {/* Fixed Buttons */}
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