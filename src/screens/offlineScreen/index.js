import NetInfo from '@react-native-community/netinfo';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Images} from '../../assets';
import CustomButton from '../../components/customButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {size} from '../../utils/size';

const NetInfoComp = ({isConnected, setIsConnected}) => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, [setIsConnected]);
  const checkConnection = () => {
    NetInfo.fetch(status => {
      console.log(status);
    });
  };
  return (
    <View style={styles.container}>
      {isConnected === true ? null : (
        <View style={styles.container}>
          <Image source={Images.noInternet} style={styles.image} />
          <Text style={styles.text2}>
            {isConnected === true ? '' : 'No Internet Connection'}
          </Text>
          <CustomButton
            buttonText="Reload"
            onPress={() => checkConnection()}
            textStyle={styles.submitButtonText}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'white',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: Colors.White,
    fontSize: size.button,
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
  },
});

export default NetInfoComp;
