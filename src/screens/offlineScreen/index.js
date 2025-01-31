// // // OfflineScreen.js
// // import React from 'react';
// // import {View, Text, Button, StyleSheet} from 'react-native';
// // import NetInfo from '@react-native-community/netinfo';

// // const OfflineScreen = ({navigation, route}) => {
// //   const {currentScreen, setCurrentScreen} = route.params;

// //   const checkConnection = () => {
// //     NetInfo.fetch().then(state => {
// //       if (state.isConnected) {
// //         navigation.navigate(currentScreen); // Go back to the previous screen when online
// //       }
// //     });
// //   };

// //   return (
// //     <View style={styles.offlineContainer}>
// //       <Text style={styles.offlineText}>No Internet Connection</Text>
// //       <Button title="Retry" onPress={checkConnection} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   offlineContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //   },
// //   offlineText: {
// //     fontSize: 18,
// //     color: 'red',
// //     marginBottom: 20,
// //   },
// // });

// // export default OfflineScreen;

// // src/screens/OfflineScreen.tsx

// // src/screens/OfflineScreen.tsx

// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const OfflineScreen: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         You are offline. Please check your internet connection.
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   text: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

// export default OfflineScreen;

import NetInfo from '@react-native-community/netinfo';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Images} from '../../assets';

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
          <Image source={Images.dashboardImage} style={styles.image} />
          <Text style={styles.text2}>
            {isConnected === true ? '' : 'No Internet Connection'}
          </Text>
          {/* <CustomButton title="Reload" onPress={() => checkConnection()} /> */}
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
  text2: {textAlign: 'center', fontWeight: '500', fontSize: 20},
});

export default NetInfoComp;
