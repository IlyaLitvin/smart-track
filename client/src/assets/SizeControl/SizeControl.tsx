import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Dimensions of screen design
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 800;

const scale = (size: number): number => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

export {scale, verticalScale};
