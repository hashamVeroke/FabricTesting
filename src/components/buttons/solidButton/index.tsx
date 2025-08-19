import { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useStyle from './styles';

const Button: FC<IButton> = (props) => {
  const {
    text,
    disabled = false,
    textStyle,
    style,
    hasIcon = false,
    icon,
    onPress,
  } = props;
  const styles = useStyle();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, disabled && styles.disabled, style]}
      disabled={disabled}
      activeOpacity={0.95}
    >
      {hasIcon && <View style={styles.iconView}>{icon}</View>}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
