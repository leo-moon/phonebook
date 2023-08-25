import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth-operations';
import LoginForm from '../../Modules/LoginForm/LoginForm';

import styles from './login-page.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className={styles.div}>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
