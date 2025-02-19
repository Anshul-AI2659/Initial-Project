import React from 'react';
import {TouchableOpacity, Text, Alert} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';

const audioRecorderPlayer = new AudioRecorderPlayer();

const CustomAudioMessage = ({currentMessage}) => {
  const playAudio = async () => {
    try {
      if (!currentMessage.audio) {
        console.error('No audio found');
        return;
      }

      console.log('Decoding audio...');
      // Write the base64 audio to a temporary file
      const path = `${RNFS.DocumentDirectoryPath}/tempAudio.m4a`;
      await RNFS.writeFile(path, currentMessage.audio, 'base64');

      console.log('Playing audio from path:', path);
      await audioRecorderPlayer.startPlayer(path);

      audioRecorderPlayer.addPlayBackListener(e => {
        if (e.currentPosition === e.duration) {
          console.log('Finished playing');
          audioRecorderPlayer.stopPlayer();
        }
      });
    } catch (error) {
      console.error('Error playing audio:', error);
      Alert.alert(
        'Playback Error',
        'An error occurred while trying to play the audio',
      );
    }
  };
  return (
    <TouchableOpacity
      onPress={playAudio}
      style={{padding: 10,marginTop:10, backgroundColor: '#f0f0f0', borderRadius: 5,alignSelf:'center'}}>
      <Text style={{color: '#007AFF'}}>Play</Text>
    </TouchableOpacity>
  );
};

export default CustomAudioMessage;
