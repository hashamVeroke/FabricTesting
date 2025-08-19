import type { StackScreenProps } from '@react-navigation/stack';
type RootStackParamList = {
  Home: undefined;
};

type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
interface ISouqAppProps {
  language?: 'en' | 'ar';
  walletId: string;
}
