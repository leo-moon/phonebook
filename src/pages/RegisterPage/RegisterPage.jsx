import { useDispatch } from 'react-redux';

import { signup } from '../../redux/auth/auth-operations';

import RegisterForm from 'Modules/RegisterForm/RegisterForm';

import styles from './register-page.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div className={styles.div}>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
