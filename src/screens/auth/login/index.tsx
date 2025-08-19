import { View, Text } from 'react-native';
import useStyle from './styles';
import useLogin from './useLogin';

const Login = () => {
  const styles = useStyle();
  const {} = useLogin();

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};
export default Login;
