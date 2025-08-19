import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeScreen } from '../../../components';
import useStyle from './styles';
import useHome from './useHome';

const Home = () => {
  const styles = useStyle();
  const { t } = useTranslation('home');
  const {} = useHome();

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>{t('category')}</Text>
      </View>
    </SafeScreen>
  );
};

export default Home;
