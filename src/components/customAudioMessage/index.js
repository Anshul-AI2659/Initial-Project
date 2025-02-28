/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

// const CustomAudioMessage = ({currentMessage}) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [playbackPosition, setPlaybackPosition] = useState(0);

//   const playPauseAudio = async () => {
//     try {
//       if (!currentMessage.audio) {
//         console.error('No audio found');
//         return;
//       }

//       if (!isPlaying) {
//         console.log('Decoding audio...');
//         const path = `${RNFS.DocumentDirectoryPath}/tempAudio.m4a`;
//         await RNFS.writeFile(path, currentMessage.audio, 'base64');

//         console.log('Playing audio from path:', path);
//         await audioRecorderPlayer.startPlayer(path);

//         audioRecorderPlayer.addPlayBackListener(e => {
//           setPlaybackPosition(e.currentPosition);
//           if (e.currentPosition === e.duration) {
//             console.log('Finished playing');
//             audioRecorderPlayer.stopPlayer();
//             setIsPlaying(false);
//           }
//         });
//       } else {
//         console.log('Pausing audio');
//         await audioRecorderPlayer.pausePlayer();
//       }

//       setIsPlaying(!isPlaying);
//     } catch (error) {
//       console.error('Error playing audio:', error);
//       Alert.alert(
//         'Playback Error',
//         'An error occurred while trying to play the audio',
//       );
//     }
//   };

//   return (
//     <TouchableOpacity
//       onPress={playPauseAudio}
//       style={{
//         padding: 10,
//         margin: 10,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 5,
//         alignSelf: 'center',
//       }}>
//       <Text style={{color: '#007AFF'}}>
//         {isPlaying ? '⏸️ Pause' : '▶️ Play'}{' '}
//       </Text>
//     </TouchableOpacity>
//   );
// };
// export default CustomAudioMessage;

const CustomAudioMessage = ({
  currentMessage,
  onPlayPause,
  playingMessageId,
  isSender,
}) => {
  const isPlaying = playingMessageId === currentMessage._id; // Determine if this message is playing
  const messageDate = new Date(currentMessage.createdAt);
  const formattedTime = messageDate.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <TouchableOpacity
      onPress={onPlayPause}
      style={{
        padding: 10,
        margin: 10,
        marginLeft: isSender ? '0' : '50',
        width: 100,
        alignSelf: isSender ? 'flex-end' : 'flex-start',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
      }}>
      <Text style={{color: '#007AFF', textAlign: isSender ? 'right' : 'left'}}>
        {isPlaying ? '⏸️ Pause' : '▶️ Play'}
      </Text>
      <Text
        style={{
          fontSize: 10,
          color: '#bbb',
          textAlign: isSender ? 'right' : 'left',
        }}>
        {formattedTime}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomAudioMessage;
//#007AFF
