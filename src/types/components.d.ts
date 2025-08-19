interface IButton extends TouchableOpacityProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  hasIcon?: boolean;
  icon?: ReactNode;
}

interface ISafeScreen {
  backgroundColor?: string;
  translucent?: boolean;
  statusBarHidden?: boolean;
  statusBarBackgroundColor?: string;
  withScroll?: boolean;
  edges?: Edge[];
  statusBarStyle?: BarStyle;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
type SafeScreenProps = PropsWithChildren<ISafeScreen>;
