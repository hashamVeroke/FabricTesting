import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../theme';
import useStyle from './styles';

const SafeScreen: React.FC<SafeScreenProps> = (props) => {
  const styles = useStyle();
  const {
    children,
    backgroundColor = colors.white,
    statusBarStyle = 'dark-content',
    translucent = false,
    statusBarHidden = false,
    statusBarBackgroundColor,
    edges = ['top', 'bottom'],
    style,
  } = props;
  const barBg =
    Platform.OS === 'android'
      ? translucent
        ? 'transparent'
        : (statusBarBackgroundColor ?? backgroundColor)
      : undefined;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor }, style]}
      edges={edges}
    >
      <StatusBar
        translucent={translucent}
        barStyle={statusBarStyle}
        hidden={statusBarHidden}
        backgroundColor={barBg}
      />
      {children}
    </SafeAreaView>
  );
};
export default SafeScreen;
