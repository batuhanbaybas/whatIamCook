import AnimatedLottieView from 'lottie-react-native';
import React from 'react';

const Loading = () => {
  return <AnimatedLottieView source={require('../../Assets/loading.json')} />;
};

export default Loading;
